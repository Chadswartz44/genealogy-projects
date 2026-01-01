import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Dna, Globe, CheckCircle, Sparkles } from "lucide-react";
import dnaMapImage from "@/assets/dna-map.jpg";

const ethnicityRegions = [
  { region: "Northern Europe", percentage: 42, color: "bg-blue-500", description: "Scandinavia, British Isles" },
  { region: "Southern Europe", percentage: 28, color: "bg-orange-500", description: "Italy, Spain, Greece" },
  { region: "Eastern Europe", percentage: 15, color: "bg-purple-500", description: "Poland, Russia, Ukraine" },
  { region: "West Africa", percentage: 8, color: "bg-green-500", description: "Nigeria, Ghana, Senegal" },
  { region: "Middle East", percentage: 7, color: "bg-yellow-500", description: "Turkey, Iran, Arabia" },
];

const dnaFeatures = [
  {
    icon: Globe,
    title: "2,000+ Geographic Regions",
    description: "Detailed breakdown of your ethnic origins from regions across the globe",
  },
  {
    icon: Users,
    title: "DNA Relative Matching",
    description: "Connect with relatives who share your DNA and build your family network",
  },
  {
    icon: Dna,
    title: "Health Insights",
    description: "Discover genetic health traits and wellness reports",
  },
  {
    icon: Sparkles,
    title: "Chromosome Browser",
    description: "See exactly where you share DNA with your matches",
  },
];

const howItWorks = [
  { step: 1, title: "Order Your Kit", description: "Receive a simple saliva collection kit delivered to your door" },
  { step: 2, title: "Provide Sample", description: "Follow easy instructions to collect your DNA sample at home" },
  { step: 3, title: "Send It Back", description: "Mail your sample in the prepaid packaging provided" },
  { step: 4, title: "Get Results", description: "Receive detailed results in 3-4 weeks through our secure platform" },
];

const DNATestPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="heritage-section bg-cream">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="heritage-badge mb-4">DNA Discovery</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Uncover Your
                <span className="text-primary block">Ethnic Origins</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover where your ancestors came from with our advanced DNA testing. 
                Connect with relatives worldwide and explore your unique heritage story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup">
                    Order DNA Kit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-heritage-lg">
                <img src={dnaMapImage} alt="DNA ancestry map" className="w-full h-auto" />
              </div>
              {/* Floating ethnicity cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-heritage-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Northern Europe</p>
                    <p className="text-xl font-bold text-primary">42%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnicity Breakdown */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Detailed Ethnicity Breakdown
            </h2>
            <p className="text-lg text-muted-foreground">
              See your heritage percentages from regions around the world
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {ethnicityRegions.map((item) => (
              <div key={item.region} className="mb-6 group">
                <div className="flex justify-between mb-2">
                  <div>
                    <span className="font-semibold">{item.region}</span>
                    <span className="text-sm text-muted-foreground ml-2">({item.description})</span>
                  </div>
                  <span className="font-bold text-primary">{item.percentage}%</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              What You'll Discover
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dnaFeatures.map((feature, index) => (
              <div key={index} className="heritage-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-orange text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-orange">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Discover Your Origins?
          </h2>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Order Your DNA Kit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DNATestPage;
