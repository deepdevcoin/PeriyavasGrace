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
  for (let hour = 8; hour < 20; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
}

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
  const [slotBookings, setSlotBookings] = useState<any[]>([]);
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
      const q = query(collection(db, "bookings"), where("date", "==", selectedDate));
      const snap = await getDocs(q);
      setSlotBookings(snap.docs.map((doc) => doc.data()));
    };
    fetchSlots();
  }, [selectedDate]);

  const services = ["Spiritual Guidance (Arulvakku)", "Jaathagam Writing"];

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
        ...formData,
        date: selectedDate,
        slot: selectedSlot,
        timestamp: serverTimestamp(),
        googleSignIn: user ? "Yes" : "No",
      });

      toast({
        title: "Booking Submitted!",
        description: "We will contact you shortly to confirm your appointment.",
      });

      setFormData({ fullName: "", email: "", phone: "", service: "" });
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

  const isSlotBooked = (slot: string) => slotBookings.find((b: any) => b.slot === slot);
  const backgroundImage = formData.service ? `url(${serviceBackgrounds[formData.service] || ""})` : "none";

  return (
    <div
      className="min-h-screen flex flex-col transition-background duration-1000 ease-in-out bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <Navigation />
      <main className="flex-1">
        <section className="relative py-20 text-center bg-gradient-to-b from-accent/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col gap-8">
              {/* Two equal height cards side-by-side */}
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                {/* LEFT: Time Slot + Date */}
                <Card
                  className="flex-1 p-8 shadow-warm bg-white bg-opacity-80 flex flex-col justify-between cursor-pointer"
                  onClick={() => {
                    // Optional: Add a click handler for the whole card if needed
                  }}
                >
                  <div>
                    <h2 className="text-center text-lg font-semibold text-primary mb-6">
                      Select Date & Time Slot
                    </h2>

                    {/* Styled Date Picker */}
                    <div className="text-center mb-6">
                      <input
                        type="date"
                        value={selectedDate}
                        min={todayStr}
                        onChange={(e) => {
                          setSelectedDate(e.target.value);
                          setSelectedSlot("");
                        }}
                        id="date"
                        className="inline-block bg-white rounded-lg border border-emerald-300 py-3 px-6 text-sm font-medium text-emerald-800 shadow-sm cursor-pointer hover:bg-emerald-50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
                      />
                    </div>

                    {/* Time Slots */}
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
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground mt-4">
                        Please select a date to view available slots.
                      </p>
                    )}
                  </div>

                  {/* Selected Slot Display */}
                  {selectedSlot && (
                    <div className="mt-6 text-center rounded-lg bg-emerald-50 text-emerald-800 py-2 text-sm font-medium border border-emerald-200">
                      Selected Slot: <span className="font-semibold">{selectedSlot}</span>
                    </div>
                  )}
                </Card>

                {/* RIGHT: Booking Details */}
                <Card className="flex-1 p-8 shadow-warm bg-white bg-opacity-80 flex flex-col justify-between">
                  <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg text-primary mb-6 text-center font-semibold">
                        {formData.service
                          ? `Selected Service: ${formData.service}`
                          : "Please select a service"}
                      </h3>

                      <div className="mb-6">
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

                      <div className="mb-6">
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

                      <div className="mb-6">
                        <Label htmlFor="email">Email *</Label>
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

                      <div className="mb-6">
                        <Label htmlFor="phone">Phone *</Label>
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
                    </div>

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
              </div>

              {/* Full-width Contact Section */}
              <Card className="p-8 shadow-warm bg-white bg-opacity-80 w-full flex flex-col md:flex-row md:items-center gap-6 justify-center">
                  {/* Buttons aligned center, wrapped for responsiveness */}
                  <div className="flex flex-wrap gap-4 justify-center max-w-2xl w-full">
                    {/* Call Button */}
                    <a href="tel:+918667711998" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-48">
                        Call +91 86677 11998
                      </Button>
                    </a>
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/918667711998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="outline" className="w-full sm:w-48">
                        WhatsApp Chat
                      </Button>
                    </a>
                    {/* Send Email Button */}
                    <a href="mailto:periyavagrace@gmail.com" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-48">
                        Send Email
                      </Button>
                    </a>
                  </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
