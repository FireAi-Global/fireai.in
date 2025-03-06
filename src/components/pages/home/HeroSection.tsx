import { Component } from "solid-js";
import { Hero } from "../../../assets/landing";
import Button from "../../general/buttons";
import { Motion } from "solid-motionone";

const HeroSection: Component = () => {
  return (
    <Motion.div
      class="rounded-0 lg:rounded-[20px] flex flex-col text-center px-5 lg:px-0"
      style={{
        "background-image": `url(${Hero.HeroBackground})`,
        "background-size": "cover",
        "background-position": "center",
      }}
      animate={{
        opacity: [0, 1],
        y: [10, 0],
      }}
      transition={{
        duration: 1,
        easing: "ease-in-out",
      }}
    >
      <div class="mx-auto w-full md:w-8/12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl pt-30 font-medium">
          From Data Overload to <span class="text-blue-400">AI-Powered</span>
          <br />
          Decisions In Seconds
        </h2>
        <h3 class="text-sm md:text-base lg:text-lg mx-5 lg:mx-16">
          Your business generates loads of data, but without the right tools, it
          just sits there. Slow decisions, wasted time and missed opportunities.
          FireAI fixes that.
        </h3>
        <div class="flex flex-col lg:flex-row gap-4 justify-center mt-10">
          <Button variant="primary">Get a demo</Button>
          <Button
            variant="secondary"
            onClick={() => window.open("https://dashboard.fireai.in", "_blank")}
          >
            Login
          </Button>
        </div>
        <div class="m-0 px-10">
          <img src={Hero.HeroImage} alt="Hero Dashboard" />
        </div>
      </div>
    </Motion.div>
  );
};

export default HeroSection;
