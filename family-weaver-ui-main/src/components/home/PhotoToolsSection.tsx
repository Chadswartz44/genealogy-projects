import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import photoAnimation from "@/assets/photo-animation.jpg";

export function PhotoToolsSection() {
  return (
    <section className="py-20 lg:py-32 bg-heritage-dark text-heritage-warm-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage-lg group">
              <img
                src={photoAnimation}
                alt="Before and after photo restoration"
                className="w-full h-auto"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-heritage-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow-orange hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </button>
              </div>

              {/* Before/After Labels */}
              <div className="absolute bottom-4 left-4 bg-heritage-dark/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="text-sm font-medium text-heritage-sepia">Before</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="text-sm font-medium text-primary-foreground">After</span>
              </div>
            </div>

            {/* Floating Feature Badge */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-2xl p-4 shadow-glow-orange animate-pulse-soft">
              <Sparkles className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              AI-Powered Tools
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Animate Your Family Photos
            </h2>
            <p className="text-lg text-heritage-sepia mb-8 leading-relaxed">
              Watch your ancestors come to life with our groundbreaking AI technology. 
              Animate old photos, restore damaged images, and colorize black-and-white pictures 
              to experience your family history like never before.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Photo Animation",
                "Color Restoration",
                "Image Enhancement",
                "Face Repair",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-heritage-warm-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/photos">
              <Button variant="hero" size="xl">
                Try Photo Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
