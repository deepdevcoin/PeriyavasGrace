import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "Kamatchi Amman Frame",
      description: "Beautifully framed image of Goddess Kamatchi Amman with chanting of 1 lakh mantras",
      price: "₹5,000",
      features: [
        "High-quality frame with divine imagery",
        "1 lakh mantra chanting performed",
        "Blessed with positive spiritual energy",
        "Brings prosperity and protection",
        "Perfect for home or office worship",
      ],
    },
    {
      name: "Muthu Maari Amman Frame",
      description: "Divine image of Kulanthat Muthu Maari Amman with powerful mantra chanting",
      price: "₹5,000",
      features: [
        "Premium quality frame",
        "1 lakh mantra chanting performed",
        "Energized with divine blessings",
        "Provides protection and positive energy",
        "Ideal for worship and meditation",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                Blessed Products
              </h1>
              <p className="text-xl text-muted-foreground">
                Divine frames energized with 1 lakh mantra chanting
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="p-8 mb-12 shadow-warm bg-accent/10 border-accent">
                <p className="text-lg text-center">
                  <strong className="text-accent">Special Offering:</strong> All God and Goddess frames 
                  available with 1 lakh mantra chanting as per your devotion
                </p>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <Card
                    key={index}
                    className="p-8 shadow-warm hover:shadow-xl transition-all duration-300 animate-slide-up flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-muted-foreground text-center px-4">
                        Divine {product.name}
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif font-bold mb-3 text-primary">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                      </div>
                      <Link to="/booking">
                        <Button size="lg" className="w-full bg-primary">
                          Order Now
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
              Custom Divine Frames Available
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for a specific deity frame? Contact us to discuss custom orders with 1 lakh mantra chanting
            </p>
            <a href="https://wa.me/918667711998" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary">
                Inquire via WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
