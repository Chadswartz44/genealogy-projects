import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Palette, Wand2, Image, Play, Upload } from "lucide-react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { EnhancedPhotoGallery } from "@/components/EnhancedPhotoGallery";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { AnimatedSection, StaggerContainer } from "@/components/AnimatedSection";
import vintagePortrait from "@/assets/vintage-portrait.jpg";

const tools = [
  {
    icon: Sparkles,
    title: "Deep Nostalgia™",
    description: "Animate old photos and watch your ancestors come to life with realistic facial movements.",
    action: "Animate Photo",
    link: "/features/photo-animation"
  },
  {
    icon: Palette,
    title: "Photo Colorization",
    description: "Transform black and white photos into vibrant, colorized images using AI technology.",
    action: "Colorize Photo",
    link: "/features/photo-colorization"
  },
  {
    icon: Wand2,
    title: "Photo Enhancer",
    description: "Enhance blurry or low-quality photos to reveal hidden details and improve clarity.",
    action: "Enhance Photo",
    link: "/features/photo-colorization"
  },
  {
    icon: Image,
    title: "Photo Repair",
    description: "Restore damaged, torn, or faded photos to their original condition.",
    action: "Repair Photo",
    link: "/features/photo-colorization"
  },
];

const PhotoTools = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-heritage-dark to-heritage-dark/90 text-primary-foreground py-20 md:py-32">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Magic</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Bring Your <span className="text-primary">Photos to Life</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Transform old family photos with our suite of AI-powered tools. 
                Animate, colorize, enhance, and restore precious memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#upload-section">
                  <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                    <Upload className="w-5 h-5" />
                    Upload Photo
                  </Button>
                </a>
                <Link to="/features/photo-animation">
                  <Button variant="hero-outline" size="xl" className="hover:scale-105 transition-transform">
                    See Examples
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <img 
                  src={vintagePortrait} 
                  alt="Vintage Portrait" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-elevated transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-primary-foreground fill-current" />
                  </motion.div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold text-foreground">Click to animate</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Upload Section */}
      <section id="upload-section" className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Upload Your Photo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Drag and drop your family photo or click to browse. We'll help you transform it.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-2xl mx-auto">
              <PhotoUpload />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                See the Magic in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Drag the slider to compare original and colorized photos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="max-w-xl mx-auto">
              <BeforeAfterSlider
                beforeImage={vintagePortrait}
                afterImage={vintagePortrait}
                beforeLabel="Original"
                afterLabel="Colorized"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Photo Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                View and manage all your uploaded family photos. Click any photo to animate, colorize, or enhance.
              </p>
            </div>
          </AnimatedSection>

          <EnhancedPhotoGallery />
        </div>
      </section>

      {/* Tools Grid */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                AI Photo Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our suite of powerful AI tools to transform your photos.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <tool.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>
                <Link to={tool.link}>
                  <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {tool.action}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="heritage-section bg-primary">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Transform Your Family Photos Today
            </h2>
            <a href="#upload-section">
              <Button variant="dark" size="xl" className="hover:scale-105 transition-transform">
                <Upload className="w-5 h-5" />
                Get Started Free
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoTools;
