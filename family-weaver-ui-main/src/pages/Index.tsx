import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DNASection } from "@/components/home/DNASection";
import { PhotoToolsSection } from "@/components/home/PhotoToolsSection";
import { FamilyTreeSection } from "@/components/home/FamilyTreeSection";
import { RecordsSection } from "@/components/home/RecordsSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { DevicesSection } from "@/components/home/DevicesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DNASection />
      <PhotoToolsSection />
      <FamilyTreeSection />
      <RecordsSection />
      <CommunitySection />
      <DevicesSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
