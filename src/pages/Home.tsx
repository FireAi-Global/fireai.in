import FollowCursor from "../components/general/followMouse";
import { HeroSection, ClientSection, CarouselSection, HowFireAiWorks, OurSolutionsSections, FAQsSection, MultilingualSection, PreFooterSection } from "../components/pages/home";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <FollowCursor />
      <div class="lg:py-3 px-0 lg:px-18">
        <HeroSection />
        <ClientSection />
        <CarouselSection />
        <HowFireAiWorks />
        <OurSolutionsSections />
        <MultilingualSection />
        <FAQsSection />
        <PreFooterSection />
      </div>
    </>
  );
};

export default App;
