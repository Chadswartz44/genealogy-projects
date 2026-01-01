import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Upload, Play, Sparkles, Palette, Wand2, ImagePlus, ArrowRight } from "lucide-react";
import photoAnimation from "@/assets/photo-animation.jpg";

const tools = [
  {
    icon: Play,
    title: "Photo Animation",
    description: "Bring old photos to life with AI-powered animation. Watch your ancestors blink, smile, and move.",
    color: "bg-primary",
  },
  {
    icon: Palette,
    title: "Colorization",
    description: "Transform black-and-white photos into vibrant, full-color images automatically.",
    color: "bg-secondary",
  },
  {
    icon: Wand2,
    title: "Enhancement",
    description: "Restore damaged, faded, or low-quality photos to their former glory.",
    color: "bg-heritage-gold",
  },
  {
    icon: ImagePlus,
    title: "Face Repair",
    description: "Fix scratched, torn, or damaged faces in old family photographs.",
    color: "bg-accent",
  },
];

const PhotoToolsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-heritage-dark text-heritage-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                <Sparkles className="inline h-4 w-4 mr-1" />
                AI-Powered Tools
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Bring Your Photos to Life
              </h1>
              <p className="text-lg text-heritage-sepia mb-8 leading-relaxed">
                Use cutting-edge AI technology to animate, colorize, enhance, and restore your family photos. 
                Experience your heritage like never before.
              </p>
              <Button variant="hero" size="xl">
                <Upload className="mr-2 h-5 w-5" />
                Upload a Photo
              </Button>
            </div>
            <div className="relative">
              <img src={photoAnimation} alt="Photo animation before and after" className="rounded-2xl shadow-heritage-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow-orange hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Photo Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to preserve, restore, and enhance your family's visual history
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div key={tool.title} className="bg-card rounded-2xl p-8 shadow-heritage hover:shadow-heritage-lg transition-all hover:-translate-y-1 group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl ${tool.color} flex items-center justify-center mb-6`}>
                  <tool.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{tool.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-12 shadow-heritage border-2 border-dashed border-primary/30 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Upload Your Photo
              </h3>
              <p className="text-muted-foreground mb-6">
                Drag and drop a photo here, or click to browse. Supports JPG, PNG, and HEIC files.
              </p>
              <Button variant="default" size="lg">
                Choose File
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Maximum file size: 20MB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Upload", description: "Upload any photo from your family collection" },
              { step: "2", title: "Choose Tool", description: "Select animation, colorization, or enhancement" },
              { step: "3", title: "Download", description: "Save your enhanced photo or video" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoToolsPage;
