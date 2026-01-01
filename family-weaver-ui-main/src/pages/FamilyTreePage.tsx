import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Plus, Search, ZoomIn, ZoomOut, Users, Calendar, MapPin, MoreHorizontal } from "lucide-react";
import familyTreeIllustration from "@/assets/family-tree-illustration.jpg";

const familyMembers = [
  { id: 1, name: "You", relation: "Self", birth: "1990", hasPhoto: true },
  { id: 2, name: "John Smith", relation: "Father", birth: "1962", death: "2020", hasPhoto: true },
  { id: 3, name: "Mary Smith", relation: "Mother", birth: "1965", hasPhoto: true },
  { id: 4, name: "Robert Smith", relation: "Grandfather", birth: "1935", death: "2010", hasPhoto: false },
  { id: 5, name: "Elizabeth Smith", relation: "Grandmother", birth: "1938", death: "2015", hasPhoto: true },
  { id: 6, name: "Sarah Johnson", relation: "Sister", birth: "1993", hasPhoto: true },
];

const FamilyTreePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Family Tree Builder
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Build Your Family Tree
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create a beautiful, interactive family tree. Add photos, stories, and connect with relatives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="green" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Start New Tree
              </Button>
              <Button variant="green-outline" size="lg">
                Import GEDCOM
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Builder Interface */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground px-3">100%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search family members..."
                  className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="default" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Person
              </Button>
            </div>
          </div>

          {/* Tree Visualization */}
          <div className="bg-secondary-light rounded-2xl p-8 min-h-[500px] relative overflow-hidden">
            <img
              src={familyTreeIllustration}
              alt="Family tree visualization"
              className="w-full h-auto max-h-[400px] object-contain mx-auto opacity-80"
            />
            
            {/* Overlay prompt */}
            <div className="absolute inset-0 flex items-center justify-center bg-secondary-light/80">
              <div className="text-center p-8 bg-card rounded-2xl shadow-heritage max-w-md">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Start with Yourself
                </h3>
                <p className="text-muted-foreground mb-6">
                  Begin building your family tree by adding your own information, then expand to include parents, grandparents, and more.
                </p>
                <Button variant="green" size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Myself
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Members List */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Family Members (Sample)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((member) => (
              <div key={member.id} className="bg-card rounded-xl p-4 shadow-heritage flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {member.hasPhoto ? (
                    <span className="text-lg font-display font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  ) : (
                    <Users className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
                  <p className="text-sm text-primary">{member.relation}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    {member.birth} {member.death && `- ${member.death}`}
                  </div>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyTreePage;
