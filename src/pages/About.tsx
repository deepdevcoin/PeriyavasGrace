import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                About Periyava's Grace
              </h1>
              <p className="text-xl text-muted-foreground">
                Bringing Divine Wisdom and Spiritual Guidance to Your Life
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8 shadow-warm animate-slide-up">
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Periyava's Grace by Lavanya, we are dedicated to providing authentic spiritual guidance 
                  and astrological services rooted in ancient Vedic traditions. Our mission is to help individuals 
                  navigate life's challenges through divine wisdom and personalized counseling.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the transformative power of spiritual practices, accurate astrological insights, 
                  and the divine energy of blessed products. Each service we offer is designed to bring peace, 
                  prosperity, and positive transformation into your life.
                </p>
              </Card>

              <Card className="p-8 shadow-warm animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  What We Offer
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                      Spiritual Guidance (Arulvakku)
                    </h3>
                    <p className="text-muted-foreground">
                      Personalized spiritual counseling that helps you navigate life's challenges with divine wisdom. 
                      Receive guidance on prayers, rituals, and lifestyle adjustments tailored to your specific needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                      Jaathagam Writing (Horoscope)
                    </h3>
                    <p className="text-muted-foreground">
                      Detailed and accurate horoscope preparation with comprehensive analysis of planetary positions, 
                      nakshatras, and personalized remedies for various life aspects including career, health, 
                      relationships, and wealth.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                      Blessed Products
                    </h3>
                    <p className="text-muted-foreground">
                      Beautifully framed divine images energized with 1 lakh mantra chanting. Each frame is personally 
                      blessed and infused with positive spiritual energy to transform your home's atmosphere and bring 
                      divine grace into your daily life.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-warm animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  Business Hours
                </h2>
                <p className="text-lg text-muted-foreground">
                  <strong>Thursday:</strong> 10:00 AM – 7:00 PM
                </p>
                <p className="text-muted-foreground mt-2">
                  Astrologist & Psychic services available
                </p>
                <p className="text-muted-foreground mt-4">
                  Located in Tamil Nadu, India
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

export default About;
