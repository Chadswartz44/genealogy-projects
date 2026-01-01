import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Wand2, Image, Play, Upload, Download } from "lucide-react";
import photoRestoreImage from "@/assets/photo-restore.jpg";

const photoTools = [
  {
    icon: Sparkles,
    title: "Photo Animation",
    description: "Bring old photos to life with AI-powered animation. See your ancestors smile, blink, and move.",
    link: "/features/photo-animation",
  },
  {
    icon: Palette,
    title: "Photo Colorization",
    description: "Transform black and white photos into vibrant color images using advanced AI technology.",
    link: "/features/photo-colorization",
  },
  {
    icon: Wand2,
    title: "Photo Enhancement",
    description: "Restore damaged, faded, or blurry photos to their original glory with AI enhancement.",
    link: "/features/photo-enhancement",
  },
  {
    icon: Image,
    title: "Photo Repair",
    description: "Fix scratches, tears, and other damage to preserve precious family memories.",
    link: "/features/photo-repair",
  },
];

const howItWorks = [
  { step: 1, icon: Upload, title: "Upload Photo", description: "Upload any old family photo from your collection" },
  { step: 2, icon: Wand2, title: "AI Processing", description: "Our AI analyzes and enhances your photo" },
  { step: 3, icon: Play, title: "View Results", description: "Watch your photo come to life in seconds" },
  { step: 4, icon: Download, title: "Save & Share", description: "Download and share with family members" },
];

const PhotoToolsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="heritage-section bg-cream">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="heritage-badge mb-4">AI Photo Tools</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Bring Photos
                <span className="text-primary block">Back to Life</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your old family photos with cutting-edge AI technology. 
                Animate, colorize, enhance, and restore precious memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup">
                    Try Photo Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/features/photo-animation">See Examples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-heritage-lg group">
                <img src={photoRestoreImage} alt="Before and after photo restoration" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Tools Grid */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Powerful Photo Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to preserve and enhance your family photos
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {photoTools.map((tool, index) => (
              <Link key={index} to={tool.link} className="heritage-card p-8 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <tool.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-orange text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">Step {item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="heritage-section">
        <div className="heritage-container">
          <div className="max-w-2xl mx-auto">
            <div className="heritage-card p-8 md:p-12 text-center border-2 border-dashed border-border">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Photos?
              </h2>
              <p className="text-muted-foreground mb-6">
                Upload your first photo and see the magic happen. No credit card required.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Upload Your Photo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-orange">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Start Preserving Memories Today
          </h2>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoToolsPage;
