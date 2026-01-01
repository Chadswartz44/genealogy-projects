import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "DNA Test", href: "/dna" },
  { label: "Family Tree", href: "/tree" },
  { label: "Photo Tools", href: "/photos" },
  { label: "Records", href: "/records" },
  { label: "Community", href: "/community" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-heritage group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-display font-bold text-xl">F</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground hidden sm:block">
              Family<span className="text-primary">Heritage</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon-sm" aria-label="Change language">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Accessibility options">
              <Accessibility className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="nav-cta" size="default">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-2 bg-card border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex items-center gap-3 border-t border-border">
            <Button variant="ghost" size="icon-sm" aria-label="Change language">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Accessibility options">
              <Accessibility className="h-4 w-4" />
            </Button>
            <Link to="/login" className="flex-1">
              <Button variant="nav-cta" className="w-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
