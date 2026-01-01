import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="bg-heritage-dark text-primary-foreground py-20">
      <div className="heritage-container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80">We'd love to hear from you</p>
      </div>
    </section>
    <section className="heritage-section bg-background">
      <div className="heritage-container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "support@familyheritage.com" },
                { icon: Phone, text: "+1 (800) 555-0123" },
                { icon: MapPin, text: "123 Heritage Lane, Boston, MA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full h-12 px-4 rounded-lg border border-border bg-background" />
              <input type="email" placeholder="Your Email" className="w-full h-12 px-4 rounded-lg border border-border bg-background" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 rounded-lg border border-border bg-background resize-none" />
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
