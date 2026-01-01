import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Bell, Zap } from "lucide-react";

const discoveries = [
  {
    type: "New Record Match",
    title: "Birth certificate found for William Johnson",
    date: "2 hours ago",
    confidence: "95%",
  },
  {
    type: "DNA Match",
    title: "New 2nd cousin match discovered",
    date: "Yesterday",
    confidence: "High",
  },
  {
    type: "Tree Connection",
    title: "Possible connection to the Miller family tree",
    date: "3 days ago",
    confidence: "78%",
  },
];

export function SmartDiscoveriesSection() {
  return (
    <section className="heritage-section bg-foreground text-background">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Easy Automatic
              <span className="text-primary block">Discoveries</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our smart technology works 24/7 to find new records, relatives, and connections 
              for your family tree. Get notified instantly when we discover something new.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Enable Smart Hints
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Discovery Cards */}
          <div className="space-y-4">
            {discoveries.map((discovery, index) => (
              <div
                key={index}
                className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-xl p-5 hover:bg-background/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {discovery.type}
                      </span>
                      <span className="text-xs text-muted-foreground">• {discovery.date}</span>
                    </div>
                    <h3 className="font-medium text-background group-hover:text-primary transition-colors">
                      {discovery.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-heritage-green/20 text-heritage-green">
                        {discovery.confidence} confidence
                      </span>
                    </div>
                  </div>
                  <Bell className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
