import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Palette, Users, Globe, ChevronRight } from "lucide-react";

const features: Record<string, { title: string; icon: any; desc: string; details: string[] }> = {
  "photo-animation": { title: "Photo Animation", icon: Sparkles, desc: "Bring old photos to life with Deep Nostalgia™ technology.", details: ["AI-powered facial animation", "Realistic eye and mouth movements", "Works with any old photo", "High-resolution output"] },
  "photo-colorization": { title: "Photo Colorization", icon: Palette, desc: "Transform black and white photos into vibrant color images.", details: ["AI color prediction", "Natural skin tones", "Accurate historical colors", "Batch processing available"] },
  "smart-matching": { title: "Smart Matching", icon: Users, desc: "Automatically find connections between family trees.", details: ["Cross-reference millions of trees", "Instant match notifications", "Verify and merge profiles", "Collaborate with matches"] },
  "dna-matching": { title: "DNA Matching", icon: Globe, desc: "Connect with genetic relatives around the world.", details: ["Accurate relationship predictions", "Shared ancestor hints", "Chromosome browser", "DNA relative messaging"] },
};

const FeaturePage = () => {
  const { feature } = useParams();
  const data = features[feature || ""] || features["photo-animation"];
  const Icon = data.icon;

  return (
    <Layout>
      <section className="bg-heritage-dark text-primary-foreground py-20 md:py-32">
        <div className="heritage-container text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">{data.desc}</p>
        </div>
      </section>
      <section className="heritage-section bg-background">
        <div className="heritage-container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {data.details.map((detail, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-heritage-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-heritage-green">✓</span>
                </div>
                <span className="text-foreground">{detail}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/login"><Button variant="hero" size="xl">Try It Free<ChevronRight className="w-5 h-5" /></Button></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturePage;
