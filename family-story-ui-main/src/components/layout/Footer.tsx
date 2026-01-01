import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Heart 
} from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "DNA Test", path: "/dna-test" },
      { label: "Family Tree", path: "/family-tree" },
      { label: "Photo Tools", path: "/photo-tools" },
      { label: "Historical Records", path: "/records" },
    ],
  },
  features: {
    title: "Features",
    links: [
      { label: "Photo Animation", path: "/features/photo-animation" },
      { label: "Photo Colorization", path: "/features/photo-colorization" },
      { label: "Smart Matching", path: "/features/smart-matching" },
      { label: "DNA Matching", path: "/features/dna-matching" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Press", path: "/press" },
      { label: "Blog", path: "/blog" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", path: "/help" },
      { label: "Contact Us", path: "/contact" },
      { label: "Community", path: "/community" },
      { label: "FAQ", path: "/faq" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Accessibility", path: "/accessibility" },
  { label: "Cookie Settings", path: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="heritage-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">H</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                Family<span className="text-primary">Heritage</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Discover your family story. Build your family tree, uncover your ancestry, and bring old photos to life.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="heritage-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {new Date().getFullYear()} FamilyHeritage. Made with 
              <Heart className="h-4 w-4 text-primary fill-primary" /> 
              for families worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
