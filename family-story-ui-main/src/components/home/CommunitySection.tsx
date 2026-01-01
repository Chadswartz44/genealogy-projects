import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, MessageCircle, Share2 } from "lucide-react";

const stats = [
  { value: "6.7B+", label: "Family Profiles" },
  { value: "86M+", label: "Family Trees" },
  { value: "180+", label: "Countries" },
  { value: "42", label: "Languages" },
];

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Family Forums",
    description: "Connect with distant relatives and share stories",
  },
  {
    icon: Share2,
    title: "Collaborative Trees",
    description: "Build family trees together with relatives",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Join millions of families around the world",
  },
];

export function CommunitySection() {
  return (
    <section className="heritage-section bg-cream">
      <div className="heritage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="heritage-badge mb-4">Global Community</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join the World's Largest
            <span className="text-primary block">Family Network</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with millions of families worldwide. Share stories, collaborate on research, 
            and discover relatives you never knew you had.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card shadow-heritage-sm"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="heritage-card p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/community">
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
