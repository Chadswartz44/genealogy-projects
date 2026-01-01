import { Layout } from "@/components/layout/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-heritage-dark text-primary-foreground py-20">
      <div className="heritage-container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
        <p className="text-primary-foreground/80">Last updated: January 2024</p>
      </div>
    </section>
    <section className="heritage-section bg-background">
      <div className="heritage-container max-w-3xl prose prose-lg">
        <div className="space-y-8 text-foreground">
          <div><h2 className="text-2xl font-display font-bold mb-4">Information We Collect</h2><p className="text-muted-foreground">We collect information you provide directly, including name, email, and family tree data. DNA samples are processed securely and stored with encryption.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">How We Use Your Data</h2><p className="text-muted-foreground">Your data is used to provide our services, match you with relatives, and improve our platform. We never sell your personal information to third parties.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">Data Security</h2><p className="text-muted-foreground">We employ industry-standard security measures including encryption, secure servers, and regular security audits to protect your information.</p></div>
          <div><h2 className="text-2xl font-display font-bold mb-4">Your Rights</h2><p className="text-muted-foreground">You can access, correct, or delete your data at any time. Contact our support team to exercise these rights.</p></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
