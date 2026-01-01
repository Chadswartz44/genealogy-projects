import { Layout } from "@/components/layout/Layout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How does the DNA test work?", a: "Simply order a kit, provide a saliva sample, and mail it back. Results are ready in 3-4 weeks." },
  { q: "Is my data secure?", a: "Yes, we use bank-level encryption and never share your genetic data without consent." },
  { q: "Can I cancel my subscription?", a: "Yes, cancel anytime from your account settings. Access continues until billing period ends." },
  { q: "How accurate are the records?", a: "Our records are sourced from official archives worldwide and verified by expert genealogists." },
  { q: "Can family members collaborate?", a: "Yes! Invite unlimited family members to view and contribute to your shared family tree." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="bg-heritage-dark text-primary-foreground py-20">
        <div className="heritage-container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/80">Find answers to common questions</p>
        </div>
      </section>
      <section className="heritage-section bg-background">
        <div className="heritage-container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl shadow-soft overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
