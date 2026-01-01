import { Layout } from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="bg-heritage-dark text-primary-foreground py-20">
      <div className="heritage-container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
        <p className="text-primary-foreground/80">Last updated: January 2024</p>
      </div>
    </section>
    <section className="heritage-section bg-background">
      <div className="heritage-container max-w-3xl">
        <div className="space-y-8 text-foreground">
          <div><h2 className="text-2xl font-display font-bold mb-4">Acceptance of Terms</h2><p className="text-muted-foreground">By using FamilyHeritage, you agree to these terms. If you do not agree, please do not use our services.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">Use of Services</h2><p className="text-muted-foreground">You must be 18 or older to use our DNA services. You agree to provide accurate information and use the platform responsibly.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">Intellectual Property</h2><p className="text-muted-foreground">All content on FamilyHeritage is protected by copyright. You retain ownership of your family data and photos.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">Limitation of Liability</h2><p className="text-muted-foreground">FamilyHeritage is provided "as is" without warranties. We are not liable for any damages arising from use of our services.</p></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
