import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Users, Heart, Search, Download, Share2, Lightbulb } from "lucide-react";
import familyTreeImage from "@/assets/family-tree-illustration.jpg";

const treeFeatures = [
  {
    icon: Plus,
    title: "Easy to Build",
    description: "Add family members with just a few clicks. Our intuitive interface makes building your tree simple.",
  },
  {
    icon: Lightbulb,
    title: "Smart Hints",
    description: "Get automatic suggestions for records and relatives based on your tree data.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Invite family members to contribute photos, stories, and information to your shared tree.",
  },
  {
    icon: Search,
    title: "Record Matching",
    description: "Automatically match your relatives with historical records from our database.",
  },
  {
    icon: Download,
    title: "Export & Print",
    description: "Download your family tree as PDF or print beautiful charts for family gatherings.",
  },
  {
    icon: Share2,
    title: "Share Easily",
    description: "Share your family tree with relatives via email or social media.",
  },
];

const sampleTreeMembers = [
  { name: "You", relation: "Self", generation: 0 },
  { name: "John Smith", relation: "Father", generation: 1 },
  { name: "Mary Smith", relation: "Mother", generation: 1 },
  { name: "Robert Smith", relation: "Grandfather", generation: 2 },
  { name: "Elizabeth Smith", relation: "Grandmother", generation: 2 },
  { name: "James Wilson", relation: "Grandfather", generation: 2 },
  { name: "Sarah Wilson", relation: "Grandmother", generation: 2 },
];

const FamilyTreePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="heritage-section bg-heritage-green-light">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="heritage-badge bg-heritage-green/10 text-heritage-green mb-4">Family Tree Builder</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Build Your
                <span className="text-heritage-green block">Family Tree</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Create a beautiful online family tree and discover generations of your ancestry. 
                Add photos, stories, and connect with relatives worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heritage" size="lg" asChild>
                  <Link to="/signup">
                    Start Your Tree
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heritage-outline" size="lg" asChild>
                  <Link to="/pricing">View Plans</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-heritage-lg bg-card p-6">
                <img src={familyTreeImage} alt="Family tree illustration" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tree Preview */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Interactive Family Tree
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore your ancestry with our interactive tree viewer
            </p>
          </div>
          
          {/* Tree Visualization Mock */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-heritage-lg p-8 overflow-x-auto">
              {/* Generation 2 */}
              <div className="flex justify-center gap-4 mb-8">
                {sampleTreeMembers.filter(m => m.generation === 2).map((member, idx) => (
                  <div key={idx} className="heritage-card p-4 text-center min-w-[120px]">
                    <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.relation}</p>
                  </div>
                ))}
              </div>
              
              {/* Connecting lines */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-8 bg-border" />
              </div>
              
              {/* Generation 1 */}
              <div className="flex justify-center gap-8 mb-8">
                {sampleTreeMembers.filter(m => m.generation === 1).map((member, idx) => (
                  <div key={idx} className="heritage-card p-4 text-center min-w-[140px] border-2 border-heritage-green">
                    <div className="w-14 h-14 rounded-full bg-heritage-green/10 mx-auto mb-2 flex items-center justify-center">
                      <Users className="h-7 w-7 text-heritage-green" />
                    </div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.relation}</p>
                  </div>
                ))}
              </div>
              
              {/* Connecting line */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-8 bg-border" />
              </div>
              
              {/* You */}
              <div className="flex justify-center">
                <div className="heritage-card p-6 text-center min-w-[160px] border-2 border-primary bg-primary/5">
                  <div className="w-16 h-16 rounded-full bg-gradient-orange mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="font-bold text-lg">You</p>
                  <p className="text-muted-foreground">Start Here</p>
                  <Button variant="default" size="sm" className="mt-3" asChild>
                    <Link to="/signup">
                      <Plus className="h-4 w-4 mr-1" /> Add Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treeFeatures.map((feature, index) => (
              <div key={index} className="heritage-card p-6">
                <div className="w-12 h-12 rounded-xl bg-heritage-green/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-heritage-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-heritage-green">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-green-foreground mb-6">
            Start Building Your Legacy
          </h2>
          <p className="text-lg text-heritage-green-foreground/80 mb-8 max-w-xl mx-auto">
            Create your family tree today and preserve your family's history for generations to come.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Create Free Tree</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyTreePage;
