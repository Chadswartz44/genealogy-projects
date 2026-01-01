import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Wand2, Play } from "lucide-react";
import photoRestoreImage from "@/assets/photo-restore.jpg";
import { useState } from "react";

const photoFeatures = [
  {
    icon: Sparkles,
    title: "Photo Animation",
    description: "Bring old photos to life with AI-powered animation",
  },
  {
    icon: Palette,
    title: "Colorization",
    description: "Add stunning color to black and white photos",
  },
  {
    icon: Wand2,
    title: "Enhancement",
    description: "Restore and enhance damaged or faded photos",
  },
];

export function PhotoToolsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="heritage-section">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="heritage-badge mb-4">AI Photo Tools</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Animate Your
              <span className="text-primary block">Family Photos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              See your ancestors smile, blink, and come to life with our cutting-edge AI technology. 
              Transform old photos into living memories that can be shared with your family.
            </p>

            {/* Features Grid */}
            <div className="space-y-4 mb-8">
              {photoFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/photo-tools">
                Try Photo Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Photo Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage-lg group">
              <img
                src={photoRestoreImage}
                alt="Before and after photo restoration"
                className="w-full h-auto"
              />
              {/* Play Button Overlay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-heritage-glow animate-pulse-glow">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-heritage-green/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
