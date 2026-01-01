import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Users, Heart, MessageCircle, Share2, BookOpen, Camera, ChevronRight } from "lucide-react";

const feedPosts = [
  {
    author: "Sarah Mitchell",
    avatar: "S",
    time: "2 hours ago",
    content: "Just discovered that my great-great-grandfather immigrated from Ireland in 1892! Found the original ship manifest. 🍀",
    likes: 24,
    comments: 8,
    type: "discovery"
  },
  {
    author: "Michael Chen",
    avatar: "M",
    time: "5 hours ago",
    content: "Animated my grandmother's wedding photo from 1952. The results are incredible - it's like seeing her young again. 💕",
    likes: 56,
    comments: 12,
    type: "photo"
  },
  {
    author: "Emma Johnson",
    avatar: "E",
    time: "1 day ago",
    content: "Connected with a 3rd cousin I never knew existed! We're now collaborating on our shared family tree.",
    likes: 42,
    comments: 15,
    type: "connection"
  },
];

const familyStories = [
  {
    title: "The Journey West",
    author: "Robert Wilson",
    excerpt: "My great-grandparents left everything behind in Poland to start a new life in America...",
    date: "March 2024"
  },
  {
    title: "Letters from the War",
    author: "Jennifer Adams",
    excerpt: "Found a box of letters my grandfather wrote during WWII. Each one is a treasure...",
    date: "February 2024"
  },
  {
    title: "The Family Recipe Book",
    author: "Maria Santos",
    excerpt: "Passed down through five generations, our family recipes tell our story...",
    date: "January 2024"
  },
];

const Community = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-heritage-dark to-heritage-dark/90 text-primary-foreground py-16 md:py-24">
        <div className="heritage-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Join Our <span className="text-primary">Community</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Connect with millions of family history enthusiasts. Share discoveries, 
            collaborate on research, and celebrate your heritage together.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">6.7B</div>
              <div className="text-primary-foreground/60">Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">86M</div>
              <div className="text-primary-foreground/60">Family Trees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">52M</div>
              <div className="text-primary-foreground/60">Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Community Feed
              </h2>

              {/* Post Input */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    Y
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Share a discovery with the community..."
                      className="w-full h-20 p-3 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Camera className="w-4 h-4 mr-2" />
                          Photo
                        </Button>
                        <Button variant="ghost" size="sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Story
                        </Button>
                      </div>
                      <Button size="sm" className="hover:scale-105 transition-transform">Share</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              {feedPosts.map((post, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{post.author}</span>
                        <span className="text-sm text-muted-foreground">• {post.time}</span>
                      </div>
                      <p className="text-foreground mb-4">{post.content}</p>
                      <div className="flex gap-6">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Family Stories */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Family Stories
                </h3>
                <div className="space-y-4">
                  {familyStories.map((story, i) => (
                    <div key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-1">{story.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{story.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>By {story.author}</span>
                        <span>•</span>
                        <span>{story.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/blog">
                  <Button variant="ghost" className="w-full mt-4">
                    Read More Stories
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Connect */}
              <div className="bg-heritage-green-light rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Find Collaborators
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect with relatives researching the same family lines.
                </p>
                <Link to="/family-tree">
                  <Button variant="green" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Find Matches
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="heritage-section bg-heritage-cream">
        <div className="heritage-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Join the Conversation
          </h2>
          <Link to="/login">
            <Button variant="hero" size="xl">
              Get Started
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
