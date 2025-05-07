'use client';

import HeroSection from "./HeroSection";
import OurSolutionsSection from "./OurSolutionsSection";
import FAQsSection from "./FAQsSection";
import PreFooterSection from "./PreFooterSection";
import GetDemoModal from "@/components/general/demo-modal";
import ClientSection from "./ClientSection";
import HowFireAiWorksSection from "./HowFireAiWorksSection";
import KeyFeaturesSection from "./KeyFeaturesSection";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const { isDemoModalOpen, closeDemoModal } = useModal();

  return (
    <div className="lg:py-3 px-0 lg:px-18">
      <GetDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      <HeroSection />
      <ClientSection />
      <OurSolutionsSection />
      <HowFireAiWorksSection />
      <KeyFeaturesSection />
      <FAQsSection />
      <PreFooterSection />
    </div>
  );
}
