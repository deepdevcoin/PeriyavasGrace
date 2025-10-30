import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import divineFrameImage from "@/assets/divine-frame.jpg";

const Products = () => {
  const products = [
    {
      name: "Kamatchi Amman Frame",
      description: "Beautifully framed image of Goddess Kamatchi Amman with chanting of 1 lakh mantras",
      price: "₹5,000",
      features: [
        "High-quality premium frame",
        "1 lakh mantra chanting performed",
        "Blessed with positive spiritual energy",
        "Brings prosperity and protection",
        "Perfect for home or office worship",
        "Authenticity certificate included",
      ],
      badge: "Popular",
    },
    {
      name: "Muthu Maari Amman Frame",
      description: "Divine image of Kulanthat Muthu Maari Amman with powerful mantra chanting",
      price: "₹5,000",
      features: [
        "Premium quality crafted frame",
        "1 lakh mantra chanting performed",
        "Energized with divine blessings",
        "Protection and positive energy",
        "Ideal for worship and meditation",
        "Authenticity certificate included",
      ],
      badge: "Blessed",
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
                <span className="text-accent font-semibold">✨ Sacred Blessed Products</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Divine Frames
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each frame energized with 1 lakh mantra chanting to bring divine presence into your space
              </p>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="p-8 mb-12 shadow-warm bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 animate-scale-in">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-accent flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2 text-primary">
                      Special Sacred Offering
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      All God and Goddess frames available with <strong className="text-accent">1 lakh mantra chanting</strong> performed with devotion and dedication to infuse maximum divine energy.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {products.map((product, index) => (
                  <Card
                    key={index}
                    className="p-0 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 overflow-hidden animate-slide-up flex flex-col"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                        <img 
                          src={divineFrameImage} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg">
                        {product.badge}
                      </Badge>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h2 className="text-3xl font-serif font-bold mb-3 text-primary">
                        {product.name}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-3 mb-6 flex-grow">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="text-accent" size={14} />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t-2 border-border pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Investment</div>
                            <div className="text-4xl font-bold text-primary">{product.price}</div>
                          </div>
                        </div>
                        <Link to="/booking">
                          <Button size="lg" className="w-full bg-primary shadow-warm hover-lift">
                            Order Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-12 text-center shadow-warm bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary-foreground">
                Custom Divine Frames Available
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Looking for a specific deity frame? Contact us to discuss custom orders with 1 lakh mantra chanting performed with complete devotion
              </p>
              <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="shadow-warm hover-lift">
                  Inquire via WhatsApp
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

export default Products;
