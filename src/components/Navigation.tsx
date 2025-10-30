import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Experiences", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b-2 border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-warm transition-transform group-hover:scale-110">
              <span className="text-2xl">🕉️</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-primary block leading-tight">
                Periyava's Grace
              </span>
              <span className="text-xs text-muted-foreground">by Lavanya</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className={`${
                    location.pathname === link.path 
                      ? "bg-primary shadow-warm" 
                      : "hover:bg-accent/10"
                  } transition-all`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/booking">
              <Button className="ml-4 bg-primary shadow-warm hover-lift">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-2 animate-slide-up border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className={`w-full justify-start text-lg ${
                    location.pathname === link.path ? "bg-primary" : ""
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-lg mt-4 shadow-warm">
                Book Consultation
              </Button>
            </Link>
            <a 
              href="https://wa.me/918667711998" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full text-lg mt-2 border-2">
                <Phone className="mr-2" size={20} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
