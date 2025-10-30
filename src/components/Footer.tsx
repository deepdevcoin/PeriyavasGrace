import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/periyavagrace",
      icon: Instagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Periyavagrace",
      icon: Youtube,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/periyavagrace?t=VSR9kGAub4JlxufwOzWAWg&s=09",
      icon: "X",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@periyavagrace",
      icon: "T",
    },
    {
      name: "Telegram",
      url: "https://t.me/Periyavagrace",
      icon: "TG",
    },
  ];

  const whatsappLinks = [
    {
      name: "Chat",
      url: "https://wa.me/918667711998",
    },
    {
      name: "Group",
      url: "https://chat.whatsapp.com/DpcfBXq1LEaJWG19IMcpK0",
    },
    {
      name: "Channel",
      url: "https://whatsapp.com/channel/0029VbAVuUN2ZjCibUCclz2m",
    },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Divine Experiences", path: "/testimonials" },
    { name: "Book Consultation", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t-2 border-border mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-warm">
                <span className="text-2xl">🕉️</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary leading-tight">
                  Periyava's Grace
                </h3>
                <span className="text-xs text-muted-foreground">by Lavanya</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Authentic spiritual guidance, Vedic astrology, and blessed products bringing divine grace into your life.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:periyavagrace@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">periyavagrace@gmail.com</span>
              </a>
              <a
                href="tel:+918667711998"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+91 86677 11998</span>
              </a>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-primary">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-primary">Follow Us</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover-lift border-2 border-transparent hover:border-accent">
                    {typeof link.icon === "string" ? (
                      <span className="text-sm font-bold">{link.icon}</span>
                    ) : (
                      <link.icon size={20} />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-primary">WhatsApp</h3>
            <div className="space-y-3">
              {whatsappLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full hover-lift border-2">
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border pt-8">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © 2025 Periyava's Grace by Lavanya. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Bringing divine wisdom and spiritual transformation since 2010
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
