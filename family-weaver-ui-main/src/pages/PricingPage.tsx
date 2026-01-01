import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start exploring your family history",
    features: [
      "Basic family tree (up to 250 people)",
      "Limited record hints",
      "Photo uploads (100MB)",
      "Community access",
      "Basic DNA analysis",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    price: "$14.99",
    period: "/month",
    description: "Full access to records & tools",
    features: [
      "Unlimited family tree",
      "Billions of historical records",
      "Priority record hints",
      "Photo tools (animate, colorize)",
      "Advanced DNA matching",
      "Ad-free experience",
      "Family group features",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Complete",
    price: "$29.99",
    period: "/month",
    description: "Everything in Premium, plus more",
    features: [
      "Everything in Premium",
      "International records access",
      "Newspaper archives",
      "Priority support",
      "Health DNA insights",
      "Trait analysis",
      "Unlimited photo storage",
      "Export & backup tools",
    ],
    cta: "Start Free Trial",
    variant: "green" as const,
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Family Tree Size", free: "250 people", premium: "Unlimited", complete: "Unlimited" },
  { feature: "Historical Records", free: "Limited", premium: "Full Access", complete: "Full + International" },
  { feature: "DNA Matching", free: "Basic", premium: "Advanced", complete: "Advanced + Health" },
  { feature: "Photo Tools", free: "—", premium: "All Tools", complete: "All Tools" },
  { feature: "Storage", free: "100MB", premium: "10GB", complete: "Unlimited" },
  { feature: "Support", free: "Community", premium: "Email", complete: "Priority" },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-heritage-dark text-heritage-warm-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
            Pricing Plans
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Choose Your Journey
          </h1>
          <p className="text-lg text-heritage-sepia max-w-2xl mx-auto">
            Start free and upgrade anytime. All paid plans include a 14-day free trial with full access.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 shadow-heritage ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-secondary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Compare Plans
          </h2>
          
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-heritage overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-6 font-semibold text-foreground">Free</th>
                    <th className="text-center p-6 font-semibold text-primary bg-primary/5">Premium</th>
                    <th className="text-center p-6 font-semibold text-foreground">Complete</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonFeatures.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-6 text-foreground font-medium">{row.feature}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.free}</td>
                      <td className="p-6 text-center text-foreground bg-primary/5">{row.premium}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.complete}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check our FAQ or contact support for more information.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="lg">
              View FAQ
            </Button>
            <Button variant="ghost" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
