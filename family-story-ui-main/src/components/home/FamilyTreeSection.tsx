import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Plus, Heart } from "lucide-react";
import familyTreeImage from "@/assets/family-tree-illustration.jpg";

const treeFeatures = [
  { icon: Users, label: "Add unlimited family members" },
  { icon: Plus, label: "Smart hints & discoveries" },
  { icon: Heart, label: "Collaborate with relatives" },
];

export function FamilyTreeSection() {
  return (
    <section className="heritage-section bg-heritage-green-light">
      <div className="heritage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="heritage-badge bg-heritage-green/10 text-heritage-green mb-4">Family Tree Builder</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Create Your Online
            <span className="text-heritage-green block">Family Tree</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Build your family tree online and discover generations of your ancestry. 
            Our intuitive tools make it easy to add relatives, upload photos, and share with family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tree Illustration */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-heritage-lg bg-card p-8">
              <img
                src={familyTreeImage}
                alt="Family tree illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Features & CTA */}
          <div>
            <div className="space-y-6 mb-10">
              {treeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-heritage-sm hover:shadow-heritage-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-heritage-green/10 flex items-center justify-center group-hover:bg-heritage-green transition-colors">
                    <feature.icon className="h-7 w-7 text-heritage-green group-hover:text-heritage-green-foreground transition-colors" />
                  </div>
                  <span className="text-lg font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button variant="heritage" size="lg" asChild>
              <Link to="/family-tree">
                Start Your Family Tree
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
