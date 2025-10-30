import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      name: "Muthu Maari Amman Frame",
      description:
        "Divine frame of Muthu Maari Amman, energized for spiritual protection and abundance.",
      price: "₹5,000",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Durga Devi Frame",
      description:
        "Graceful frame of Goddess Durga — symbolizes strength and divine protection.",
      price: "₹4,800",
      image:
        "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lakshmi Frame",
      description:
        "Goddess Lakshmi frame — brings wealth, harmony, and positive energy.",
      price: "₹4,500",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shiva Parvati Frame",
      description:
        "Beautifully crafted Shiva Parvati frame — a symbol of balance and devotion.",
      price: "₹5,200",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Venkateswara Frame",
      description:
        "Tirupati Balaji frame — brings prosperity, success, and divine blessings.",
      price: "₹5,300",
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ayyappan Frame",
      description:
        "Lord Ayyappan frame — symbolizes devotion, peace, and discipline.",
      price: "₹4,900",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 text-center bg-gradient-to-b from-accent/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-serif font-bold text-primary mb-4">
                Blessed Frames Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore handcrafted divine frames, energized with sacred mantra
                chanting for peace, devotion, and prosperity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <Card className="overflow-hidden rounded-3xl border border-border hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                    <div className="relative w-full aspect-square bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-2xl font-serif font-semibold text-primary mb-3">
                        {product.name}
                      </h2>
                      <p className="text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                        <Link to="/booking" aria-label={`Order ${product.name}`}>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            Order
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Contact */}
        <section className="py-16 bg-muted/10 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-semibold text-primary mb-4">
              Custom Divine Frames
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Want a specific deity or custom design? Get in touch for a
              personalized handcrafted frame energized with mantra chanting.
            </p>
            <a
              href="https://wa.me/918667711998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact via WhatsApp
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
