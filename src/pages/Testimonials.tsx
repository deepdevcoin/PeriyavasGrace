import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "We placed the Periyava frame with 1 lakh mantra chanting in our home and immediately felt a divine presence. The positive energy in our house has transformed completely.",
      author: "Suganya S.",
      location: "Coimbatore",
    },
    {
      text: "The Jaathagam writing service was incredibly detailed and accurate. The remedies suggested have brought positive changes in my career and personal life.",
      author: "Rajesh K.",
      location: "Chennai",
    },
    {
      text: "Lavanya's spiritual guidance through Arulvakku helped me navigate a difficult period in my life. Her divine wisdom and compassionate counseling were truly transformative.",
      author: "Priya M.",
      location: "Madurai",
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
                Divine Experiences
              </h1>
              <p className="text-xl text-muted-foreground">
                Stories of transformation and grace from our blessed community
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="p-12 shadow-warm">
                        <Quote className="text-accent mb-6" size={48} />
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t border-border pt-6">
                          <p className="text-lg font-semibold text-primary">
                            {testimonial.author}
                          </p>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                Share Your Divine Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have you experienced transformation through our services? We'd love to hear your story and 
                how divine grace has touched your life.
              </p>
              <a href="mailto:periyavagrace@gmail.com" className="inline-block">
                <Card className="p-6 inline-block hover:shadow-warm transition-shadow">
                  <p className="text-primary font-semibold">
                    Email us: periyavagrace@gmail.com
                  </p>
                </Card>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
