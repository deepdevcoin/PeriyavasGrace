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
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "We placed the Periyava frame with 1 lakh mantra chanting in our home and immediately felt a divine presence. The positive energy in our house has transformed completely. Our family life has become more peaceful and harmonious.",
      author: "Suganya S.",
      location: "Coimbatore",
      rating: 5,
    },
    {
      text: "The Jaathagam writing service was incredibly detailed and accurate. Every prediction resonated with my life experiences. The remedies suggested have brought positive changes in my career and personal life. Highly recommend Lavanya's expertise!",
      author: "Rajesh K.",
      location: "Chennai",
      rating: 5,
    },
    {
      text: "Lavanya's spiritual guidance through Arulvakku helped me navigate a difficult period in my life. Her divine wisdom and compassionate counseling were truly transformative. I found clarity and peace that I had been seeking for years.",
      author: "Priya M.",
      location: "Madurai",
      rating: 5,
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
                <span className="text-accent font-semibold">✨ Stories of Transformation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Divine Experiences
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories of grace, transformation, and spiritual awakening from our blessed community
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="p-12 lg:p-16 shadow-warm hover-lift bg-card/50 backdrop-blur-sm border-2 mx-2">
                        <div className="flex justify-center mb-8">
                          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                            <Quote className="text-accent" size={40} />
                          </div>
                        </div>

                        <div className="flex justify-center gap-1 mb-8">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-accent fill-accent" size={24} />
                          ))}
                        </div>

                        <p className="text-2xl text-center text-muted-foreground leading-relaxed mb-10 italic font-serif">
                          "{testimonial.text}"
                        </p>

                        <div className="border-t-2 border-border pt-8 text-center">
                          <p className="text-2xl font-serif font-bold text-primary mb-2">
                            {testimonial.author}
                          </p>
                          <p className="text-lg text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 lg:-left-12" />
                <CarouselNext className="right-0 lg:-right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-12 text-center shadow-warm bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary-foreground">
                Share Your Divine Experience
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Have you experienced transformation through our services? We would be honored to hear your story and how divine grace has touched your life.
              </p>
              <a href="mailto:periyavagrace@gmail.com" className="inline-block">
                <Card className="inline-block p-6 bg-card hover-lift border-2">
                  <p className="text-primary font-semibold text-lg">
                    📧 periyavagrace@gmail.com
                  </p>
                </Card>
              </a>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
