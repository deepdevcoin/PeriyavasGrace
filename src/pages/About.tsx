import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Heart, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Compassionate Guidance",
      description: "Personal attention to every client's spiritual journey",
    },
    {
      icon: Award,
      title: "Authentic Traditions",
      description: "Rooted in ancient Vedic wisdom and practices",
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
                <span className="text-accent font-semibold">✨ Our Sacred Mission</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                About Periyava's Grace
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Bringing Divine Wisdom and Spiritual Guidance to Transform Lives
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <Card className="p-10 lg:p-14 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-slide-up">
                <h2 className="text-4xl font-serif font-bold mb-6 text-primary">
                  Our Divine Mission
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At <strong className="text-primary">Periyava's Grace by Lavanya</strong>, we are dedicated to providing authentic spiritual guidance 
                    and astrological services rooted in ancient Vedic traditions. Our mission is to help individuals 
                    navigate life's challenges through divine wisdom and personalized counseling.
                  </p>
                  <p>
                    We believe in the transformative power of spiritual practices, accurate astrological insights, 
                    and the divine energy of blessed products. Each service we offer is designed to bring peace, 
                    prosperity, and positive transformation into your life through the grace of the divine.
                  </p>
                  <p>
                    With years of dedicated practice and thousands of satisfied clients, we continue to serve as a 
                    bridge between the divine realm and those seeking spiritual enlightenment and guidance.
                  </p>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {highlights.map((highlight, index) => (
                  <Card 
                    key={index}
                    className="p-8 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                      <highlight.icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                ))}
              </div>

              <Card className="p-10 lg:p-14 shadow-warm hover-lift bg-gradient-to-br from-card/50 to-accent/5 backdrop-blur-sm border-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-4xl font-serif font-bold mb-8 text-primary">
                  What We Offer
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-primary flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                        <span className="text-accent">✨</span>
                      </div>
                      Spiritual Guidance (Arulvakku)
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                      Personalized spiritual counseling that helps you navigate life's challenges with divine wisdom. 
                      Receive guidance on prayers, rituals, and lifestyle adjustments tailored to your specific needs 
                      and spiritual journey.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-primary flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                        <span className="text-accent">📖</span>
                      </div>
                      Jaathagam Writing (Horoscope)
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                      Detailed and accurate horoscope preparation with comprehensive analysis of planetary positions, 
                      nakshatras, and personalized remedies for various life aspects including career, health, 
                      relationships, and wealth prosperity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-primary flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                        <span className="text-accent">🙏</span>
                      </div>
                      Blessed Products
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                      Beautifully framed divine images energized with 1 lakh mantra chanting. Each frame is personally 
                      blessed and infused with positive spiritual energy to transform your home's atmosphere and bring 
                      divine grace and protection into your daily life.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-10 lg:p-14 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-4xl font-serif font-bold mb-8 text-primary">
                  Visit Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                        Business Hours
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        <strong>Thursday</strong><br />
                        10:00 AM – 7:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Astrologist & Psychic services available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                        Location
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Tamil Nadu, India
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Near Vadapalani Murugan Temple area
                      </p>
                    </div>
                  </div>
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

export default About;
