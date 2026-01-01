import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Sparkles, Globe, MessageCircle, Share2 } from "lucide-react";
import { InteractiveDNAMap } from "@/components/InteractiveDNAMap";
import { AnimatedSection, StaggerContainer } from "@/components/AnimatedSection";

const dnaMatches = [
  { name: "Emma Johnson", relationship: "2nd Cousin", shared: "3.2%", location: "California, USA", avatar: "EJ" },
  { name: "Thomas Mueller", relationship: "3rd Cousin", shared: "1.8%", location: "Munich, Germany", avatar: "TM" },
  { name: "Sofia Andersson", relationship: "4th Cousin", shared: "0.9%", location: "Stockholm, Sweden", avatar: "SA" },
  { name: "Patrick O'Brien", relationship: "2nd Cousin", shared: "2.5%", location: "Dublin, Ireland", avatar: "PO" },
];

const DNATest = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-heritage-dark to-heritage-dark/90 text-primary-foreground py-20 md:py-32">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">2,114 Geographic Regions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Discover Your <span className="text-primary">DNA Origins</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Uncover your ethnic origins and find new relatives with the most comprehensive 
                DNA test available. Get insights from over 2,000 geographic regions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing">
                  <Button variant="hero" size="xl">
                    Order DNA Kit
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features/dna-matching">
                  <Button variant="hero-outline" size="xl">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-full max-w-md">
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-foreground">Your DNA Results</p>
                      <p className="text-sm text-primary-foreground/60">Sample preview</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { region: "Western European", pct: 42, color: "bg-blue-500" },
                      { region: "Eastern European", pct: 28, color: "bg-purple-500" },
                      { region: "Scandinavian", pct: 15, color: "bg-cyan-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm text-primary-foreground/80 flex-1">{item.region}</span>
                        <span className="text-sm font-bold text-primary">{item.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive DNA Map Section */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Explore Your Ethnicity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on the map regions to see detailed information about your genetic heritage.
                Discover the beautiful tapestry of your ancestry.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <InteractiveDNAMap />
          </AnimatedSection>
        </div>
      </section>

      {/* DNA Matches */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Find DNA Relatives
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with genetic relatives you never knew existed. Send messages and build your family network.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={100}>
            {dnaMatches.map((match, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                  <span className="text-xl font-bold text-primary">{match.avatar}</span>
                </div>
                <h3 className="font-semibold text-foreground text-center mb-2">{match.name}</h3>
                <p className="text-primary font-medium text-center mb-2">{match.relationship}</p>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {match.shared} DNA shared
                </p>
                <p className="text-xs text-muted-foreground text-center mb-4">
                  📍 {match.location}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="flex-1">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </StaggerContainer>

          <div className="text-center mt-8">
            <Link to="/community">
              <Button variant="outline" size="lg">
                View All Matches
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={150}>
            {[
              { icon: Globe, title: "2,114 Regions", desc: "The most comprehensive geographic coverage available" },
              { icon: Users, title: "DNA Matches", desc: "Connect with relatives worldwide instantly" },
              { icon: Sparkles, title: "Free Updates", desc: "Ethnicity estimates improve over time" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="heritage-section bg-heritage-cream">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Discover Your Origins?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Order your DNA kit today and begin your journey of discovery.
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                Get Your DNA Kit
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DNATest;
