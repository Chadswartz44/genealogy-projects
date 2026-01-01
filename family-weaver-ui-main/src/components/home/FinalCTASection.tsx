import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-heritage-dark text-heritage-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Discovering Your Family Story Today
          </h2>
          <p className="text-lg text-heritage-sepia mb-10 leading-relaxed">
            Join millions of people uncovering their heritage. Begin with a free trial and 
            unlock access to billions of records, DNA insights, and powerful family tree tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tree">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="xl">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm text-heritage-sepia mt-6">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
