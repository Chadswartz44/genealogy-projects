import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "DNA Test", href: "/dna" },
    { label: "Family Tree", href: "/tree" },
    { label: "Photo Tools", href: "/photos" },
    { label: "Historical Records", href: "/records" },
  ],
  features: [
    { label: "Photo Animation", href: "/photos" },
    { label: "Photo Colorization", href: "/photos" },
    { label: "Smart Matching", href: "/tree" },
    { label: "DNA Matching", href: "/dna" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Community", href: "/community" },
    { label: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-heritage-dark text-heritage-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">F</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Family<span className="text-primary">Heritage</span>
              </span>
            </Link>
            <p className="text-heritage-sepia text-sm leading-relaxed mb-6">
              Discover your roots, connect with your past, and build your family story for generations to come.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-heritage-navy flex items-center justify-center text-heritage-sepia hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-heritage-sepia text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-heritage-sepia text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-heritage-sepia text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-heritage-sepia text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-heritage-navy">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-heritage-sepia text-sm">
              © {new Date().getFullYear()} FamilyHeritage. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="#" className="text-heritage-sepia hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-heritage-sepia hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-heritage-sepia hover:text-primary transition-colors">
                Accessibility
              </Link>
              <Link to="#" className="text-heritage-sepia hover:text-primary transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
