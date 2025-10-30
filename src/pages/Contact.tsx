import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 86677 11998",
      link: "tel:+918667711998",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      content: "periyavagrace@gmail.com",
      link: "mailto:periyavagrace@gmail.com",
      description: "Send us your inquiries",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tamil Nadu, India",
      description: "Near Vadapalani Murugan Temple area",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Thursday: 10:00 AM – 7:00 PM",
      description: "Astrologist & Psychic services",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                <span className="text-accent font-semibold">✨ Get In Touch</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reach out for spiritual guidance, divine blessings, and personalized consultations
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-8 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg text-muted-foreground hover:text-primary transition-colors break-all block mb-2"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-lg text-muted-foreground mb-2">{info.content}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="p-6 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-3xl font-serif font-bold mb-6 text-primary">
                  Find Us on Map
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden border-2 border-border">
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
                <p className="text-muted-foreground mt-6 text-center">
                  Near Arulmigu Vadapalani Murugan Temple / Nexus Vijaya Mall area, Tamil Nadu
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
