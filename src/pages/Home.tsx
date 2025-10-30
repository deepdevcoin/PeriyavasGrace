import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialFeeds from "@/components/SocialFeeds";
import { Sparkles, BookOpen, ShoppingBag } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Spiritual Guidance",
      description: "Personalized Arulvakku counseling to navigate life's challenges with divine wisdom",
      link: "/services",
    },
    {
      title: "Jaathagam Writing",
      description: "Detailed and accurate horoscope preparation with comprehensive planetary analysis",
      link: "/services",
    },
    {
      title: "Blessed Products",
      description: "Divine frames with 1 lakh mantra chanting to bring positive energy to your home",
      link: "/products",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              Periyava's Grace by Lavanya
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Experience Divine Guidance through Spiritual Counseling, Astrology & Blessed Products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-lg px-8">
                  Book Divine Consultation
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Explore Blessed Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-primary">
            Our Divine Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 shadow-warm hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="outline">Learn More →</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with us for personalized spiritual guidance and blessed products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                WhatsApp: +91 86677 11998
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Feeds */}
      <SocialFeeds />

      <Footer />
    </div>
  );
};

export default Home;
