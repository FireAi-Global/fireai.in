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
      <div class="mx-auto">
      <div class="w-full md:w-8/12 mx-auto">
        <h2 class="text-3xl md:text-4xl lg:text-5xl pt-30 font-medium">
          AI-Powered Business <span class="bg-gradient-to-r from-[#322638] via-blue-400 to-[#322638] text-transparent bg-clip-text">Intelligence </span>
          <br class="hidden lg:block" />
          at Your Fingertips
        </h2>
        <h3 class="text-sm md:text-base lg:text-lg mx-5 mt-2 lg:mt-8 lg:mx-16 lg:px-10 my-5 lg:my-0">
          Your business generates loads of data, but without the right tools, it
          just sits there. Slow decisions, wasted time and missed opportunities.
          FireAI fixes that.
        </h3>
        {/* <div class="flex flex-col lg:flex-row gap-4 justify-center mt-2 lg:mt-10">
          <div class="hidden lg:block">
            <Button variant="primary">Get a demo</Button>
          </div>
          <div class="hidden lg:block">
            <Button
              variant="secondary"
              onClick={() => window.open("https://dashboard.fireai.in", "_blank")}
            >
              Login
            </Button>
          </div>
          <div class="lg:hidden">
            <Button
              variant="secondary"
              span="full"
              onClick={() => window.open("https://dashboard.fireai.in", "_blank")}
            >
              Login
            </Button>
          </div>
        </div> */}
        </div>
        <div class="m-0 overflow-hidden">
          <img src={Hero.HeroImage} alt="Hero Dashboard" class="lg:w-[80%] mx-auto w-[380px] min-h-[200px]" />
        </div>
      </div>
    </Motion.div>
  );
};

export default HeroSection;
