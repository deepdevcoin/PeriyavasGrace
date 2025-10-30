import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, Check } from "lucide-react";
import jaathagamImage from "@/assets/jaathagam.jpg";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Jaathagam Writing",
      subtitle: "Comprehensive Vedic Horoscope Analysis",
      description: "Detailed and accurate Jaathagam preparation with comprehensive analysis of planetary positions, nakshatras, and life guidance",
      features: [
        "Complete planetary position analysis",
        "Nakshatra and dashas interpretation",
        "Life aspects: career, health, relationships, wealth",
        "Personalized remedies and recommendations",
        "Traditional format with modern insights",
        "Detailed written report delivered",
      ],
      image: jaathagamImage,
    },
    {
      icon: Sparkles,
      title: "Spiritual Guidance (Arulvakku)",
      subtitle: "Divine Wisdom for Life's Journey",
      description: "Personalized spiritual counseling to help navigate life's challenges with divine wisdom and grace",
      features: [
        "Divine wisdom channeling for decisions",
        "Prayer and ritual recommendations",
        "Lifestyle adjustment guidance",
        "Spiritual energy cleansing advice",
        "Ongoing support for spiritual growth",
        "Compassionate one-on-one counseling",
      ],
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
                <span className="text-accent font-semibold">✨ Expert Spiritual & Astrological Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Our Sacred Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Authentic Vedic wisdom and spiritual guidance rooted in ancient traditions
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                          <service.icon className="text-accent" size={120} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                          <service.icon className="text-accent" size={28} />
                        </div>
                      </div>
                      
                      <h2 className="text-4xl font-serif font-bold mb-2 text-primary">
                        {service.title}
                      </h2>
                      <p className="text-lg text-accent font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="text-accent" size={14} />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/booking">
                        <Button size="lg" className="bg-primary shadow-warm hover-lift">
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

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-12 text-center shadow-warm bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary-foreground">
                Have Questions About Our Services?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Contact us directly via WhatsApp for personalized consultation and detailed service information
              </p>
              <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="shadow-warm hover-lift">
                  WhatsApp: +91 86677 11998
                </Button>
              </a>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
