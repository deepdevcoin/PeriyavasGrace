import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Reach out for spiritual guidance and divine blessings
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 shadow-warm">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-accent mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-serif font-bold mb-2 text-primary">
                        Phone
                      </h3>
                      <a
                        href="tel:+918667711998"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +91 86677 11998
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-warm">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-accent mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-serif font-bold mb-2 text-primary">
                        Email
                      </h3>
                      <a
                        href="mailto:periyavagrace@gmail.com"
                        className="text-muted-foreground hover:text-primary break-all"
                      >
                        periyavagrace@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-warm">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-accent mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-serif font-bold mb-2 text-primary">
                        Location
                      </h3>
                      <p className="text-muted-foreground">Tamil Nadu, India</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-warm">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-accent mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-serif font-bold mb-2 text-primary">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">Thursday</p>
                      <p className="text-muted-foreground">10:00 AM – 7:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Astrologist & Psychic services
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map */}
              <Card className="p-6 shadow-warm h-fit">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  Find Us
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7659345326746!2d80.21247887507695!3d13.052406587263826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e0e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sArulmigu%20Vadapalani%20Murugan%20Temple!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Near Arulmigu Vadapalani Murugan Temple / Nexus Vijaya Mall area
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
