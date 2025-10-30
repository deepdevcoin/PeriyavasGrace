import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialFeeds from "@/components/SocialFeeds";
import { Sparkles, BookOpen, ShoppingBag, Phone } from "lucide-react";
import heroImage from "@/assets/hero-spiritual.jpg";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Spiritual Guidance",
      description: "Personalized Arulvakku counseling to navigate life's challenges with divine wisdom",
      link: "/services",
    },
    {
      icon: BookOpen,
      title: "Jaathagam Writing",
      description: "Detailed and accurate horoscope preparation with comprehensive planetary analysis",
      link: "/services",
    },
    {
      icon: ShoppingBag,
      title: "Blessed Products",
      description: "Divine frames with 1 lakh mantra chanting to bring positive energy to your home",
      link: "/products",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Spiritual guidance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <span className="text-accent font-semibold">✨ Divine Guidance Awaits</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              Periyava's Grace<br/>
              <span className="text-accent">by Lavanya</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Experience transformative spiritual counseling, authentic Vedic astrology, and blessed products energized with sacred mantras
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-lg px-10 py-6 shadow-warm hover-lift">
                  Book Divine Consultation
                </Button>
              </Link>
              <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-2 hover-lift">
                  <Phone className="mr-2" size={20} />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-serif font-bold mb-4 text-primary">
              Our Divine Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing ancient wisdom and divine grace to guide your spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="ghost" className="group text-primary">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">1 Lakh</div>
              <div className="text-lg opacity-90">Mantras Chanted</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-warm hover-lift bg-gradient-to-br from-card to-accent/5 border-2">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-primary">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with us for personalized spiritual guidance, accurate astrological insights, and blessed products that bring divine energy into your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-lg px-10 py-6">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Feeds */}
      <SocialFeeds />

      <Footer />
    </div>
  );
};

export default Home;
