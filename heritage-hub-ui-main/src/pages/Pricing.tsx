import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Get started with basic features",
    icon: Star,
    features: [
      "Build a family tree (up to 250 people)",
      "View DNA ethnicity estimate",
      "Access to limited records",
      "Basic photo tools",
      "Community access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "14.99",
    period: "month",
    description: "For serious genealogy research",
    icon: Crown,
    features: [
      "Unlimited family tree size",
      "Full DNA ethnicity breakdown",
      "Access to all U.S. records",
      "Smart Matches™ technology",
      "Photo enhancement tools",
      "Priority support",
    ],
    cta: "Get Premium",
    popular: true,
  },
  {
    name: "Complete",
    price: "29.99",
    period: "month",
    description: "Everything included",
    icon: Zap,
    features: [
      "Everything in Premium",
      "International records access",
      "Deep Nostalgia™ unlimited",
      "Full photo colorization",
      "Advanced DNA matching",
      "Dedicated support team",
      "Early access to new features",
    ],
    cta: "Get Complete",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Family tree members", free: "250", premium: "Unlimited", complete: "Unlimited" },
  { name: "DNA ethnicity regions", free: "42", premium: "2,114", complete: "2,114" },
  { name: "Record collections", free: "Limited", premium: "U.S. Only", complete: "Worldwide" },
  { name: "Photo animations", free: "3/month", premium: "50/month", complete: "Unlimited" },
  { name: "Photo colorization", free: "–", premium: "10/month", complete: "Unlimited" },
  { name: "Smart Matches™", free: "–", premium: "✓", complete: "✓" },
  { name: "Priority support", free: "–", premium: "✓", complete: "✓" },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-heritage-dark to-heritage-dark/90 text-primary-foreground py-16 md:py-24">
        <div className="heritage-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start with a free trial and upgrade anytime. All plans include access 
            to our core features and growing database of records.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="heritage-section bg-background -mt-8">
        <div className="heritage-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-card rounded-2xl p-8 shadow-soft ${
                  plan.popular ? "ring-2 ring-primary scale-105 shadow-card" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${plan.popular ? "bg-primary" : "bg-primary/10"} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-heritage-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-heritage-green" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/login">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Compare Plans
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Premium</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Complete</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 px-4 text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{feature.free}</td>
                    <td className="py-4 px-4 text-center text-foreground font-medium bg-primary/5">{feature.premium}</td>
                    <td className="py-4 px-4 text-center text-foreground">{feature.complete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="heritage-section bg-background">
        <div className="heritage-container max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period." },
              { q: "Is there a free trial?", a: "Yes! All new users get a 14-day free trial of our Premium plan." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay." },
            ].map((faq, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="ghost">
                View All FAQs
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="heritage-section bg-primary">
        <div className="heritage-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Start Your Free Trial Today
          </h2>
          <Link to="/login">
            <Button variant="dark" size="xl">
              Get Started Free
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
