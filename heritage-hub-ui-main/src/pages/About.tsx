import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Heart, Briefcase, ChevronRight } from "lucide-react";

const About = () => (
  <Layout>
    <section className="bg-heritage-dark text-primary-foreground py-20 md:py-32">
      <div className="heritage-container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About FamilyHeritage</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Connecting families across generations since 2003</p>
      </div>
    </section>
    <section className="heritage-section bg-background">
      <div className="heritage-container">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Target, title: "Our Mission", desc: "To help everyone discover their unique family story and preserve it for future generations." },
            { icon: Heart, title: "Our Vision", desc: "A world where every person knows where they come from and feels connected to their heritage." },
            { icon: Users, title: "Our Community", desc: "Over 52 million members worldwide, united by a passion for family history." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-heritage-green-light rounded-2xl p-8 md:p-12 text-center">
          <Briefcase className="w-12 h-12 text-heritage-green mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We're always looking for passionate people to help families discover their heritage.</p>
          <Button variant="green"><ChevronRight className="w-4 h-4" />View Open Positions</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
