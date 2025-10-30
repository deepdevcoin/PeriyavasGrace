import { useState } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, User, Calendar } from "lucide-react";

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
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/booking`,
        },
      });

      if (error) throw error;

      toast({
        title: "Signing in...",
        description: "Please complete the sign-in process",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with Google",
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

      const { error } = await supabase.functions.invoke("save-booking", {
        body: {
          ...formData,
          timestamp: new Date().toISOString(),
          googleSignIn: user ? "Yes" : "No",
        },
      });

      if (error) throw error;

      toast({
        title: "Booking Submitted Successfully! 🙏",
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                <span className="text-accent font-semibold">✨ Schedule Your Consultation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Book Your Divine Consultation
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Begin your spiritual journey with personalized guidance and divine blessings
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 lg:p-12 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-scale-in">
                {!user && (
                  <div className="mb-10 text-center">
                    <p className="text-muted-foreground mb-6 text-lg">
                      Sign in with Google to autofill your details instantly
                    </p>
                    <Button
                      onClick={handleGoogleSignIn}
                      variant="outline"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-6 text-lg border-2 hover-lift"
                    >
                      <svg className="mr-3" width="20" height="20" viewBox="0 0 20 20">
                        <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                        <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                        <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
                        <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
                      </svg>
                      Sign in with Google
                    </Button>
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t-2 border-border" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-card px-4 text-muted-foreground font-medium">
                          Or fill the form manually
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-base flex items-center gap-2">
                      <User size={18} className="text-accent" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                      className="h-12 text-lg border-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base flex items-center gap-2">
                      <Mail size={18} className="text-accent" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12 text-lg border-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base flex items-center gap-2">
                      <Phone size={18} className="text-accent" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12 text-lg border-2"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-base flex items-center gap-2">
                      <Calendar size={18} className="text-accent" />
                      Service Required *
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="h-12 text-lg border-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-lg">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-lg h-14 shadow-warm hover-lift"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Booking Request"}
                  </Button>
                </form>

                <div className="mt-10 pt-10 border-t-2 border-border text-center">
                  <p className="text-muted-foreground mb-6 text-lg">
                    Prefer to connect directly?
                  </p>
                  <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="px-8 py-6 border-2 hover-lift">
                      <Phone className="mr-2" size={20} />
                      WhatsApp: +91 86677 11998
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
