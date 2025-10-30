import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

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
      name: "WhatsApp Chat",
      url: "https://wa.me/918667711998",
    },
    {
      name: "WhatsApp Group",
      url: "https://chat.whatsapp.com/DpcfBXq1LEaJWG19IMcpK0",
    },
    {
      name: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029VbAVuUN2ZjCibUCclz2m",
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Periyava's Grace by Lavanya
            </h3>
            <p className="text-muted-foreground mb-4">
              Spiritual guidance, astrology services, and blessed products to bring divine grace into your life.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:periyavagrace@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>periyavagrace@gmail.com</span>
              </a>
              <a
                href="tel:+918667711998"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+91 86677 11998</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/booking" className="block text-muted-foreground hover:text-primary transition-colors">
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  <Button variant="outline" size="icon">
                    {typeof link.icon === "string" ? (
                      <span className="text-sm font-bold">{link.icon}</span>
                    ) : (
                      <link.icon size={18} />
                    )}
                  </Button>
                </a>
              ))}
            </div>
            <div className="space-y-2">
              {whatsappLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 Periyava's Grace by Lavanya. All rights reserved.</p>
          <p className="mt-2 text-sm">Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
