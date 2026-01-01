import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DNASection } from "@/components/home/DNASection";
import { PhotoToolsSection } from "@/components/home/PhotoToolsSection";
import { FamilyTreeSection } from "@/components/home/FamilyTreeSection";
import { RecordsSection } from "@/components/home/RecordsSection";
import { SmartDiscoveriesSection } from "@/components/home/SmartDiscoveriesSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection, CTASection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DNASection />
      <PhotoToolsSection />
      <FamilyTreeSection />
      <RecordsSection />
      <SmartDiscoveriesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
