import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";

function generateSlots() {
  const slots = [];
  for (let hour = 8; hour < 20; hour++) { // 8am-8pm slots
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
}

// Map each service to a background image URL (replace URLs with your actual images)
const serviceBackgrounds: Record<string, string> = {
  "Spiritual Guidance (Arulvakku)": "/images/spiritual-guidance.jpg",
  "Jaathagam Writing": "/images/jaathagam-writing.jpg",
};

const Booking = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  const todayStr = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);

  const [slotBookings, setSlotBookings] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
        fullName: user.displayName || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    if (!selectedDate) return;
    const fetchSlots = async () => {
      const q = query(
        collection(db, "bookings"),
        where("date", "==", selectedDate)
      );
      const snap = await getDocs(q);
      setSlotBookings(snap.docs.map(doc => doc.data()));
    };
    fetchSlots();
  }, [selectedDate]);

  const services = [
    "Spiritual Guidance (Arulvakku)",
    "Jaathagam Writing",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.service || !selectedDate || !selectedSlot) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields and pick a slot",
      });
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "bookings"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: selectedDate,
        slot: selectedSlot,
        timestamp: serverTimestamp(),
        googleSignIn: user ? "Yes" : "No",
      });

      toast({
        title: "Booking Submitted!",
        description: "We will contact you shortly to confirm your appointment.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
      });
      setSelectedDate(todayStr);
      setSelectedSlot("");
      setSlotBookings([]);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to submit booking. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isSlotBooked = (slot) => slotBookings.find(b => b.slot === slot);

  // Background image according to selected service, fade effect
  const backgroundImage = formData.service ? `url(${serviceBackgrounds[formData.service] || ''})` : "none";

  return (
    <div
      className="min-h-screen flex flex-col transition-background duration-1000 ease-in-out bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <Navigation />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Two column layout */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Form Inputs with selected service hint */}
                <Card className="flex-1 p-8 shadow-warm bg-white bg-opacity-80">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-lg text-primary mb-2">
                      {formData.service ? `Selected Service: ${formData.service}` : "Please select a service"}
                    </h3>

                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Required *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="date">Pick a Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        min={todayStr}
                        onChange={e => {
                          setSelectedDate(e.target.value);
                          setSelectedSlot("");
                        }}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-primary"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Booking"}
                    </Button>
                  </form>
                </Card>

                {/* Right: Time Slot Picker and Contact Details */}
                <div className="w-full md:w-96 flex flex-col gap-8">
                  <Card className="p-8 shadow-warm bg-white bg-opacity-80">
                    <Label className="mb-4 block text-center text-lg text-primary font-semibold">Available Time Slots</Label>
                    {selectedDate ? (
                      <div className="grid grid-cols-4 gap-3">
                        {generateSlots().map((slot) => {
                          const isBooked = isSlotBooked(slot);
                          const isSelected = slot === selectedSlot;

                          return (
                            <button
                              key={slot}
                              type="button"
                              disabled={isBooked}
                              onClick={() => !isBooked && setSelectedSlot(slot)}
                              className={`
            w-full py-2.5 rounded-lg text-sm font-medium
            border transition-all duration-200
            ${isBooked
                                  ? "bg-neutral-200 text-neutral-400 border-neutral-300 cursor-not-allowed"
                                  : isSelected
                                    ? "bg-emerald-500 text-white border-emerald-500 shadow-md scale-[1.03]"
                                    : "bg-white text-emerald-700 border-emerald-400 hover:bg-emerald-50 hover:border-emerald-500"
                                }
          `}
                            >
                              {slot}
                            </button>
                          );
                        })}

                        {selectedSlot && (
                          <div className="col-span-4 mt-4 text-center rounded-lg bg-emerald-50 text-emerald-800 py-2 text-sm font-medium border border-emerald-200">
                            Selected Slot: <span className="font-semibold">{selectedSlot}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground">
                        Please select a date to see available slots.
                      </p>
                    )}

                  </Card>

                  <Card className="p-8 shadow-warm bg-white bg-opacity-80 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                    <p className="mb-2 text-center">
                      For immediate assistance, reach us on WhatsApp:
                    </p>
                    <a
                      href="https://wa.me/918667711998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-4"
                    >
                      <Button variant="outline" className="w-full">
                        +91 86677 11998
                      </Button>
                    </a>
                    <p className="text-center">Email: support@deepdev.co.in</p>
                    <p className="text-center">Phone: +91 12345 67890</p>
                    <p className="text-center">Address: 123 Spiritual St, Coimbatore, Tamil Nadu</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
