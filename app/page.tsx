import HeroSection from "@/components/pages/home/HeroSection";
import ClientSection from "@/components/pages/home/ClientSection";
import KeyFeaturesSection from "@/components/pages/home/KeyFeaturesSection";
import HowFireAiWorksSection from "@/components/pages/home/HowFireAiWorksSection";
import OurSolutionsSection from "@/components/pages/home/OurSolutionsSection";
import MultilingualSupportSection from "@/components/pages/home/MultilingualSupportSection";
import FAQsSection from "@/components/pages/home/FAQsSection";
import PreFooterSection from "@/components/pages/home/PreFooterSection";

export default function Home() {
  return (
    <div className="lg:py-3 px-0 lg:px-18">
      <HeroSection />
      <ClientSection />
      <KeyFeaturesSection />
      <HowFireAiWorksSection />
      <OurSolutionsSection />
      <MultilingualSupportSection />
      <FAQsSection />
      <PreFooterSection />
    </div>
  );
}
