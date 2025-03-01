import { Component } from 'solid-js';
import { HeroImage } from "../../assets/landing";
import Button from "../general/buttons";

const HeroSection: Component = () => {
  return (
    <div class="rounded-[20px] bg-gray-100 flex flex-col text-center">
      <div class="mx-auto w-8/12">
        <h2 class="text-[52px] pt-30 font-medium">
          From Data Overload to <span class="text-blue-400">AI-Powered</span>
          <br />
          Decisions In Seconds
        </h2>
        <h3 class="text-[18px] mx-16">
          Your business generates loads of data, but without the right tools, it
          just sits there. Slow decisions, wasted time and missed opportunities.
          FireAI fixes that.
        </h3>
        <div class="flex gap-4 justify-center mt-10">
          <Button variant="primary">Get a demo</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
        <div class="m-0">
          <img src={HeroImage} alt="Hero Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
