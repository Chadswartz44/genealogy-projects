import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dnaMap from "@/assets/dna-map.jpg";

const ethnicityData = [
  { region: "Eastern European", percentage: 42, color: "bg-primary" },
  { region: "Western European", percentage: 28, color: "bg-secondary" },
  { region: "Scandinavian", percentage: 15, color: "bg-heritage-gold" },
  { region: "Baltic", percentage: 10, color: "bg-accent" },
  { region: "Other Regions", percentage: 5, color: "bg-muted-foreground" },
];

export function DNASection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              DNA Discovery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Amaze Yourself with DNA Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover your unique ethnic origins and connect with relatives you never knew existed. 
              Our advanced DNA analysis covers 2,000+ geographic regions with unmatched precision.
            </p>

            {/* Ethnicity Breakdown */}
            <div className="bg-card rounded-2xl p-6 shadow-heritage mb-8">
              <h3 className="font-semibold text-foreground mb-4">Sample Ethnicity Estimate</h3>
              <div className="space-y-4">
                {ethnicityData.map((item) => (
                  <div key={item.region}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{item.region}</span>
                      <span className="text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/dna">
              <Button variant="default" size="lg">
                Explore DNA Testing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right - Map Visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage-lg">
              <img
                src={dnaMap}
                alt="DNA ancestry map showing global ethnic regions"
                className="w-full h-auto"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-heritage animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">42% Eastern European</span>
                </div>
              </div>
              
              <div 
                className="absolute top-1/3 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-heritage animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-foreground">28% Western European</span>
                </div>
              </div>
              
              <div 
                className="absolute bottom-8 left-1/4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-heritage animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-heritage-gold" />
                  <span className="text-sm font-medium text-foreground">15% Scandinavian</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
