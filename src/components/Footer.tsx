import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
} from "lucide-react";

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
      icon: Send,
    },
    {
      name: "Telegram",
      url: "https://t.me/Periyavagrace",
      icon: Send,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918667711998",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-accent/10 via-background to-background border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* 3-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Periyava's Grace by Lavanya
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spiritual guidance, astrology consultations, and divine products
              to bring peace, devotion, and blessings into your life.
            </p>
            <div className="flex flex-col items-center sm:items-start space-y-2">
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
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/booking"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Connect With Us
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="transition-transform hover:scale-110"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="shadow-sm border-border hover:border-primary hover:text-primary transition-all"
                  >
                    {typeof link.icon === "string" ? (
                      <span className="font-semibold">{link.icon}</span>
                    ) : (
                      <link.icon size={18} />
                    )}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Periyava's Grace by Lavanya. All Rights
            Reserved.
          </p>
          <p className="text-xs opacity-80">
            Crafted with devotion in Tamil Nadu, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
