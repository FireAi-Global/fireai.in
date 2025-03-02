import { HeroSection, ClientSection, CarouselSection, HowFireAiWorks, OurSolutionsSections, FAQsSection, PreFooterSection } from "../components/home";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="py-5 px-5 md:px-18">
      <HeroSection />
      <ClientSection />
      <CarouselSection />
      <HowFireAiWorks />
      <OurSolutionsSections />
      <FAQsSection />
      <PreFooterSection />
    </div>
  );
};

export default App;
