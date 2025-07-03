'use client';
import Header from "@/components/general/header";
import CareerSection from "@/components/pages/home/CareerSection";
import FAQsSection from "@/components/pages/home/FAQsSection";
import PreFooterSection from "@/components/pages/home/PreFooterSection";
import GetDemoModal from "@/components/general/demo-modal";
import { useModal } from "@/context/ModalContext";

export default function CareerPage() {
    const { isDemoModalOpen, closeDemoModal } = useModal();

    return (
        <div className="lg:px-18">
              <GetDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
            <Header />
            <CareerSection />
            <FAQsSection />
            <PreFooterSection />
            {/* <Footer /> */}
        </div>
    )
}