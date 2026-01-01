import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic features",
    features: [
      { text: "Basic family tree (up to 250 people)", included: true },
      { text: "Limited record searches", included: true },
      { text: "5 photo enhancements per month", included: true },
      { text: "Community access", included: true },
      { text: "DNA testing & matching", included: false },
      { text: "Full record access", included: false },
      { text: "Unlimited photo tools", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    price: "$14.99",
    period: "per month",
    description: "Perfect for serious researchers",
    features: [
      { text: "Unlimited family tree", included: true },
      { text: "Full record access (20B+ records)", included: true },
      { text: "Unlimited photo enhancements", included: true },
      { text: "Photo animation & colorization", included: true },
      { text: "Smart hints & discoveries", included: true },
      { text: "DNA matching (kit sold separately)", included: true },
      { text: "Collaborative trees", included: true },
      { text: "Priority support", included: false },
    ],
    cta: "Start Premium Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Complete",
    price: "$29.99",
    period: "per month",
    description: "Everything plus DNA kit included",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "DNA kit included (worth $99)", included: true },
      { text: "Advanced DNA analysis", included: true },
      { text: "Health & wellness reports", included: true },
      { text: "Chromosome browser", included: true },
      { text: "Extended family matching", included: true },
      { text: "Priority support", included: true },
      { text: "Early access to new features", included: true },
    ],
    cta: "Get Complete",
    variant: "heritage" as const,
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial on our Premium plan. No credit card required to start.",
  },
  {
    question: "What happens to my data if I downgrade?",
    answer: "Your family tree and data are always yours. If you downgrade, you'll still have access to view everything, but some features will be limited.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund.",
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="heritage-section bg-cream">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="heritage-badge mb-4">Pricing</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="text-primary block">Heritage Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start free and upgrade as your family tree grows. 
              All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="heritage-section -mt-8">
        <div className="heritage-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`heritage-card p-8 relative ${
                  plan.popular ? "border-2 border-primary shadow-heritage-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-orange text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-heritage-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground/50"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full" asChild>
                  <Link to="/signup">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-12">
        <div className="heritage-container text-center">
          <p className="text-muted-foreground">
            Need a custom plan for your organization?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Contact our sales team
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="heritage-section bg-secondary">
        <div className="heritage-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="heritage-card p-6">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-orange">
        <div className="heritage-container text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            No credit card required. Cancel anytime.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
