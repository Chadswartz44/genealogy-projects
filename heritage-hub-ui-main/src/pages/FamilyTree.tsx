import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plus, ZoomIn, ZoomOut, Move, TreePine, Users } from "lucide-react";
import { InteractiveFamilyTree } from "@/components/InteractiveFamilyTree";
import { AnimatedSection } from "@/components/AnimatedSection";
import familyTreeIllustration from "@/assets/family-tree-illustration.png";

const FamilyTree = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-heritage-green-light py-16 md:py-24">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Build Your <span className="text-heritage-green">Family Tree</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Create a beautiful online family tree. Add photos, stories, dates, and more. 
                Collaborate with family members and discover your shared heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button variant="green" size="xl" className="hover:scale-105 transition-transform">
                    Start Your Tree
                    <TreePine className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features/smart-matching">
                  <Button variant="outline" size="xl" className="hover:scale-105 transition-transform">
                    Learn About Matches
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
              <img 
                src={familyTreeIllustration} 
                alt="Family Tree" 
                className="max-w-md w-full rounded-2xl shadow-soft"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tree */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Family Tree
              </h2>
              <p className="text-lg text-muted-foreground">
                Click on any person to view details, edit information, or add new family members.
              </p>
            </div>
          </AnimatedSection>

          {/* Tree Controls */}
          <AnimatedSection delay={100}>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Move className="w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Interactive Tree Component */}
          <AnimatedSection animation="scaleIn" delay={200}>
            <InteractiveFamilyTree />
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Collaborate", desc: "Invite family to contribute to your tree" },
              { icon: TreePine, title: "Smart Matches", desc: "Get automatic matches with other trees" },
              { icon: Plus, title: "Easy to Build", desc: "Simple interface for adding family members" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-8 shadow-soft text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-heritage-green/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-heritage-green" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="heritage-section bg-heritage-green-light">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Start Building Your Family Story
            </h2>
            <Link to="/login">
              <Button variant="green" size="xl" className="hover:scale-105 transition-transform">
                Create Free Tree
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyTree;
