import Header from "@/components/general/header";
import CareerSection from "@/components/pages/home/CareerSection";
import FAQsSection from "@/components/pages/home/FAQsSection";
import PreFooterSection from "@/components/pages/home/PreFooterSection";

export default function CareerPage() {
    return (
        <div className="lg:px-18">
            <Header />
            <CareerSection />
            <FAQsSection />
            <PreFooterSection />
            {/* <Footer /> */}
        </div>
    )
}