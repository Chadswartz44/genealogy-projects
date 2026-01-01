import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Users } from "lucide-react";
import familyTreeIllustration from "@/assets/family-tree-illustration.jpg";

export function FamilyTreeSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Family Tree Builder
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Create Your Online Family Tree
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Build a beautiful, interactive family tree that grows with every discovery. 
              Add photos, stories, and documents to preserve your family's legacy for generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-2xl p-6 shadow-heritage">
                <Users className="h-8 w-8 text-secondary mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">6.7B+</div>
                <div className="text-sm text-muted-foreground">Profiles in Our Database</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-heritage">
                <Plus className="h-8 w-8 text-primary mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">86M</div>
                <div className="text-sm text-muted-foreground">Family Trees Created</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tree">
                <Button variant="green" size="lg">
                  Start Your Tree
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/tree">
                <Button variant="green-outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Tree Illustration */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-heritage-lg">
              <img
                src={familyTreeIllustration}
                alt="Family tree visualization with connected family members"
                className="w-full h-auto"
              />
            </div>

            {/* Add Family Member Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-heritage border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Plus className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Add Family Member</div>
                  <div className="text-xs text-muted-foreground">Expand your tree</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
