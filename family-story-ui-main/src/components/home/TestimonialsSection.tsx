import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I discovered relatives I never knew existed. FamilyHeritage connected me with cousins across three continents!",
    author: "Sarah M.",
    location: "California, USA",
    rating: 5,
  },
  {
    quote: "The photo animation feature brought tears to my eyes. Seeing my grandmother smile for the first time was magical.",
    author: "James L.",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "Building my family tree was so easy. The smart hints found records I never would have discovered on my own.",
    author: "Maria G.",
    location: "Madrid, Spain",
    rating: 5,
  },
];

const mediaLogos = [
  { name: "The New York Times", initial: "NYT" },
  { name: "TechCrunch", initial: "TC" },
  { name: "Fox News", initial: "FOX" },
  { name: "BBC", initial: "BBC" },
  { name: "CNN", initial: "CNN" },
];

export function TestimonialsSection() {
  return (
    <section className="heritage-section">
      <div className="heritage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="heritage-badge mb-4">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Loved by Families
            <span className="text-primary block">Around the World</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="heritage-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-heritage-gold text-heritage-gold" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {mediaLogos.map((logo, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo.initial}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-orange relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="heritage-container relative z-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Start Your Journey Today
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Join millions of families discovering their heritage. Start your free trial and 
          unlock your family's story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">
              Start Free Trial
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
