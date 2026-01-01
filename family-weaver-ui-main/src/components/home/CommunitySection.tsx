import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Heart, Share2 } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const communityStats = [
  { value: "6.7B+", label: "Profiles" },
  { value: "86M", label: "Family Trees" },
  { value: "50M+", label: "DNA Tests" },
  { value: "180+", label: "Countries" },
];

export function CommunitySection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-heritage-lg">
              <img
                src={communityImage}
                alt="Diverse community of people"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Interaction Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-heritage border border-border">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm font-medium">2.4k</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">128</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Global Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Millions Discovering Their Roots
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with relatives, share family stories, and collaborate on research. 
              Our vibrant community spans the globe, united by a passion for family history.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {communityStats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 shadow-heritage">
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/community">
              <Button variant="default" size="lg">
                Join the Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
