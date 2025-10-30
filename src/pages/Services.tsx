import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Jaathagam Writing",
      description: "Detailed and accurate Jaathagam preparation with comprehensive analysis",
      features: [
        "Complete planetary position analysis",
        "Nakshatra and dashas interpretation",
        "Life aspects coverage: career, health, relationships, wealth",
        "Personalized remedies and recommendations",
        "Written in traditional format with modern insights",
      ],
    },
    {
      icon: Sparkles,
      title: "Spiritual Guidance (Arulvakku)",
      description: "Personalized spiritual counseling to help navigate life's challenges",
      features: [
        "Divine wisdom channeling for life decisions",
        "Prayer and ritual recommendations",
        "Lifestyle adjustment guidance",
        "Spiritual energy cleansing advice",
        "Ongoing support for spiritual growth",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative py-20 text-center bg-gradient-to-b from-accent/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert spiritual and astrological guidance for your life's journey
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 lg:p-12 shadow-warm hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                      <service.icon className="text-accent mb-4" size={64} />
                    </div>
                    <div className="lg:w-3/4">
                      <h2 className="text-3xl font-serif font-bold mb-4 text-primary">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-accent mt-1">✓</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/booking">
                        <Button size="lg" className="bg-primary">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Have Questions About Our Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us directly via WhatsApp for personalized consultation and service details
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  WhatsApp: +91 86677 11998
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
