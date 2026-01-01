import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, FlaskConical, Dna, MapPin, Heart } from "lucide-react";
import dnaMap from "@/assets/dna-map.jpg";

const ethnicities = [
  { region: "Eastern European", percentage: 42, color: "bg-primary" },
  { region: "Western European", percentage: 28, color: "bg-secondary" },
  { region: "Scandinavian", percentage: 15, color: "bg-heritage-gold" },
  { region: "Baltic States", percentage: 8, color: "bg-accent" },
  { region: "Mediterranean", percentage: 5, color: "bg-destructive/60" },
  { region: "Other Regions", percentage: 2, color: "bg-muted-foreground" },
];

const dnaMatches = [
  { name: "Anna Kowalski", relationship: "2nd Cousin", shared: "3.2%", location: "Warsaw, Poland" },
  { name: "Erik Johansson", relationship: "3rd Cousin", shared: "1.8%", location: "Stockholm, Sweden" },
  { name: "Maria Schmidt", relationship: "4th Cousin", shared: "0.9%", location: "Berlin, Germany" },
  { name: "Pierre Dubois", relationship: "3rd Cousin", shared: "1.4%", location: "Paris, France" },
];

const features = [
  { icon: Globe, title: "2,000+ Regions", description: "Most detailed ethnicity breakdown available" },
  { icon: Users, title: "DNA Matching", description: "Find relatives you never knew existed" },
  { icon: FlaskConical, title: "Health Insights", description: "Learn about genetic health markers" },
  { icon: Heart, title: "Traits Analysis", description: "Discover inherited characteristics" },
];

const DNATestPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-heritage-dark text-heritage-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                DNA Discovery
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Unlock Your Genetic Heritage
              </h1>
              <p className="text-lg text-heritage-sepia mb-8 leading-relaxed">
                Discover where you really come from. Our advanced DNA analysis reveals your unique ethnic 
                makeup across 2,000+ geographic regions and connects you with relatives worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Order DNA Kit — $79
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={dnaMap} alt="DNA ancestry map" className="rounded-2xl shadow-heritage-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-heritage hover:shadow-heritage-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethnicity Breakdown */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your Ethnicity Estimate
              </h2>
              <p className="text-muted-foreground">Sample results showing detailed geographic breakdown</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-heritage">
              <div className="space-y-6">
                {ethnicities.map((item) => (
                  <div key={item.region}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{item.region}</span>
                      <span className="text-primary font-bold">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA Matches */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find Your DNA Matches
            </h2>
            <p className="text-muted-foreground">Connect with relatives based on shared genetic heritage</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dnaMatches.map((match) => (
              <div key={match.name} className="bg-card rounded-2xl p-6 shadow-heritage hover:shadow-heritage-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Dna className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">{match.name}</h3>
                  <div className="text-sm text-primary font-medium mb-1">{match.relationship}</div>
                  <div className="text-xs text-muted-foreground mb-2">{match.shared} DNA shared</div>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {match.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/tree">
              <Button variant="default" size="lg">
                Start Discovering Relatives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DNATestPage;
