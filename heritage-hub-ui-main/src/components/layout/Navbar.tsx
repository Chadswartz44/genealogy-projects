import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "DNA Test", path: "/dna-test" },
  { name: "Family Tree", path: "/family-tree" },
  { name: "Photo Tools", path: "/photo-tools" },
  { name: "Records", path: "/records" },
  { name: "Community", path: "/community" },
  { name: "Pricing", path: "/pricing" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-heritage-dark/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="heritage-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-primary-foreground font-display text-xl font-semibold hidden sm:block">
              FamilyHeritage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors hidden sm:block">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors hidden sm:block">
              <Accessibility className="w-5 h-5" />
            </button>
            <Link to="/login">
              <Button variant="hero-outline" size="sm" className="hidden sm:flex">
                Login
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-3">
                <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="hero-outline" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
