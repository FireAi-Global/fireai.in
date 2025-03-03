import { Component } from "solid-js";
import clientLogos from "../../../data/home/clientLogos";
import { Motion } from "solid-motionone";

const ClientSection: Component = () => {
  return (
    <div class="max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h2 class="text-[20px] font-medium text-gray-800 mb-12">
        Trusted by Leading Businesses
      </h2>

      {/* Desktop Layout */}
      <div class="hidden lg:flex justify-center items-center gap-20 flex-wrap">
        {clientLogos.map((logo) => (
          <img
            src={logo.src}
            alt={logo.alt}
            class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>

      {/* Mobile Marquee */}
      <div class="lg:hidden relative w-full">
        <div class="flex overflow-hidden">
          <Motion.div
            class="flex gap-12 items-center"
            animate={{
              x: [0, -1035], // Adjust this value based on your content width
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              easing: "linear"
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo) => (
              <img src={logo.src} alt={logo.alt} class="h-5 object-contain" />
            ))}
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
