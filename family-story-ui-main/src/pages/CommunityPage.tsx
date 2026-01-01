import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Users, Globe, Heart, Share2, BookOpen, Search, UserPlus } from "lucide-react";

const communityStats = [
  { value: "6.7B+", label: "Family Profiles" },
  { value: "86M+", label: "Family Trees" },
  { value: "180+", label: "Countries" },
  { value: "42", label: "Languages" },
];

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Connect with fellow researchers and share your discoveries in our active community forums.",
  },
  {
    icon: Share2,
    title: "Collaborative Research",
    description: "Work together with relatives and other researchers to break through brick walls.",
  },
  {
    icon: BookOpen,
    title: "Research Groups",
    description: "Join specialized groups focused on specific surnames, regions, or research topics.",
  },
  {
    icon: UserPlus,
    title: "Find Relatives",
    description: "Connect with cousins and distant relatives who share your ancestry.",
  },
];

const recentStories = [
  {
    title: "Reunited After 50 Years",
    excerpt: "How DNA testing helped me find my birth family across the ocean...",
    author: "Maria G.",
    date: "2 days ago",
    likes: 234,
  },
  {
    title: "Discovering My Great-Grandmother's Journey",
    excerpt: "Using ship manifests, I traced my great-grandmother's immigration from Ireland...",
    author: "James O.",
    date: "1 week ago",
    likes: 189,
  },
  {
    title: "The Photo That Changed Everything",
    excerpt: "A colorized photo of my grandfather helped identify a mystery relative...",
    author: "Sarah M.",
    date: "2 weeks ago",
    likes: 312,
  },
];

const CommunityPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="heritage-section bg-cream">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="heritage-badge mb-4">Global Community</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Connect with Millions of
              <span className="text-primary block">Family Researchers</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join the world's largest genealogy community. Share discoveries, 
              collaborate on research, and connect with relatives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Join the Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/help">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-foreground">
        <div className="heritage-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Community Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to connect, collaborate, and discover
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="heritage-card p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Community Stories</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog">View All Stories</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentStories.map((story, index) => (
              <div key={index} className="heritage-card p-6 group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{story.author}</span>
                    <span>•</span>
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{story.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Box */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Find Research Groups
            </h2>
            <p className="text-muted-foreground mb-6">
              Search for groups focused on your surname, region, or research interest
            </p>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search groups..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="default">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-orange">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join the Community?
          </h2>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityPage;
