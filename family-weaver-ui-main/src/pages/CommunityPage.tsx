import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Users, TreeDeciduous, MapPin, Calendar } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const stories = [
  {
    id: 1,
    author: "Sarah Mitchell",
    avatar: "S",
    time: "2 hours ago",
    content: "Just discovered my great-great-grandmother immigrated from Ireland in 1892! Found her passenger record on the ship 'Celtic'. So emotional to trace her journey! 🍀",
    likes: 234,
    comments: 45,
    image: true,
  },
  {
    id: 2,
    author: "David Chen",
    avatar: "D",
    time: "5 hours ago",
    content: "Connected with a 3rd cousin I never knew existed through DNA matching. We share the same great-great-grandparents from Guangdong province. Meeting next month!",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    author: "Maria Rodriguez",
    avatar: "M",
    time: "1 day ago",
    content: "Animated my abuela's 1940s wedding photo. Seeing her smile and move brought tears to my whole family's eyes. Thank you for this incredible technology! ❤️",
    likes: 567,
    comments: 89,
    image: true,
  },
  {
    id: 4,
    author: "James Wilson",
    avatar: "J",
    time: "2 days ago",
    content: "My family tree now has over 2,000 people spanning 12 generations! Started this journey 3 years ago with just my grandparents' names. The Smart Matches feature has been a game changer.",
    likes: 312,
    comments: 56,
  },
];

const groups = [
  { name: "European Ancestry", members: "45.2K", icon: MapPin },
  { name: "DNA Discoveries", members: "32.8K", icon: Users },
  { name: "Photo Restoration Tips", members: "28.1K", icon: TreeDeciduous },
  { name: "Genealogy Beginners", members: "67.4K", icon: Calendar },
];

const CommunityPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Global Community
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Connect with Your Heritage Community
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Share discoveries, collaborate on research, and connect with millions of people 
                exploring their family histories around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg">
                  Join the Community
                </Button>
                <Button variant="outline" size="lg">
                  Browse Groups
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={communityImage} alt="Diverse community" className="rounded-2xl shadow-heritage-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feed */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Community Stories
              </h2>
              
              {stories.map((story) => (
                <div key={story.id} className="bg-card rounded-2xl p-6 shadow-heritage">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-primary">{story.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{story.author}</span>
                        <span className="text-sm text-muted-foreground">· {story.time}</span>
                      </div>
                      <p className="text-foreground mt-3 leading-relaxed">{story.content}</p>
                      
                      {story.image && (
                        <div className="mt-4 h-48 bg-muted rounded-xl flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Story Image</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Heart className="h-5 w-5" />
                          <span className="text-sm font-medium">{story.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">{story.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Stories
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-card rounded-2xl p-6 shadow-heritage">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Community Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-display font-bold text-primary">6.7B+</div>
                    <div className="text-sm text-muted-foreground">Profiles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-secondary">86M</div>
                    <div className="text-sm text-muted-foreground">Trees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-heritage-gold">50M+</div>
                    <div className="text-sm text-muted-foreground">DNA Tests</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-accent">180+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>

              {/* Popular Groups */}
              <div className="bg-card rounded-2xl p-6 shadow-heritage">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Popular Groups
                </h3>
                <div className="space-y-4">
                  {groups.map((group) => (
                    <div key={group.name} className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/5 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <group.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{group.name}</div>
                        <div className="text-xs text-muted-foreground">{group.members} members</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View All Groups
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityPage;
