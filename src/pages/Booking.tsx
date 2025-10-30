// src/pages/Booking.tsx

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

import { auth, db, googleProvider } from "@/firebaseConfig"; // add auth, googleProvider exports to your firebaseConfig.ts
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Booking = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setFormData((prev) => ({
          ...prev,
          email: u.email || "",
          fullName: u.displayName || "",
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  const services = [
    "Spiritual Guidance (Arulvakku)",
    "Jaathagam Writing",
    "Kamatchi Amman Frame",
    "Muthu Maari Amman Frame",
    "Custom Divine Frame",
  ];

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      toast({
        title: "Signed in",
        description: "You are signed in with Google",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign-in Failed",
        description: error.message || "Google sign-in failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      setFormData({ fullName: "", email: "", phone: "", service: "" });
      toast({
        title: "Signed out",
        description: "You have signed out.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign-out Failed",
        description: error.message || "Sign-out failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.service) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                Book Your Consultation
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with divine wisdom and begin your spiritual journey
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 shadow-warm">
                {!user ? (
                  <div className="mb-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Sign in with Google to autofill your details
                    </p>
                    <Button
                      onClick={handleGoogleSignIn}
                      variant="outline"
                      disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      Sign in with Google
                    </Button>
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or fill manually
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Signed in as {user.displayName || user.email}
                    </p>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      Sign out
                    </Button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <Button
                    type="submit"
                    className="w-full bg-primary"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Booking"}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Or contact us directly for immediate assistance
                  </p>
                  <a
                    href="https://wa.me/918667711998"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">WhatsApp: +91 86677 11998</Button>
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
