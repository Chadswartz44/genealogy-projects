import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import dnaMapImage from "@/assets/dna-map.jpg";

const ethnicityData = [
  { region: "Northern Europe", percentage: 42, color: "bg-blue-500" },
  { region: "Southern Europe", percentage: 28, color: "bg-orange-500" },
  { region: "Eastern Europe", percentage: 15, color: "bg-purple-500" },
  { region: "West Africa", percentage: 8, color: "bg-green-500" },
  { region: "Middle East", percentage: 7, color: "bg-yellow-500" },
];

export function DNASection() {
  return (
    <section className="heritage-section bg-cream">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage-lg">
              <img
                src={dnaMapImage}
                alt="DNA ancestry map"
                className="w-full h-auto"
              />
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-heritage-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Northern Europe</p>
                    <p className="text-2xl font-bold text-primary">42%</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-heritage-md animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Southern Europe</p>
                    <p className="text-2xl font-bold text-primary">28%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="heritage-badge mb-4">DNA Insights</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Amaze Yourself with
              <span className="text-primary block">DNA Discoveries</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Uncover your ethnic origins and find new relatives with our advanced DNA testing. 
              See where your ancestors came from across 2,000+ geographic regions.
            </p>

            {/* Ethnicity Breakdown */}
            <div className="space-y-4 mb-8">
              {ethnicityData.map((item) => (
                <div key={item.region} className="group">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{item.region}</span>
                    <span className="text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:opacity-80`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/dna-test">
                Explore DNA Testing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
