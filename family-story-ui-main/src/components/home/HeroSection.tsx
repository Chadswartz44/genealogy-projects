import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Multi-generational family photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="heritage-container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Trusted by 6+ million families worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Discover Your
            <span className="block text-primary">Family Story</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Build your family tree, uncover new relatives, and explore billions of historical records. 
            Start your journey today with a free trial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/dna-test">
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 mt-10 pt-10 border-t border-primary-foreground/20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">6.7B+</p>
              <p className="text-sm text-primary-foreground/60">Family Profiles</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-primary-foreground">86M+</p>
              <p className="text-sm text-primary-foreground/60">Family Trees</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-primary-foreground">20B+</p>
              <p className="text-sm text-primary-foreground/60">Historical Records</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
