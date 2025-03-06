import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import { FireSmartWhite } from "../../../assets/icons";
import { CompanyThemeGradient } from "../../../assets/company";
import { Motion } from "solid-motionone";
import { benefits, features } from "../../../data/home/keyFeatures";
import Button from "../../general/buttons";
import links from "../../../data/links";


const KeyFeaturesSection: Component = () => {
  const [currentSlide, setCurrentSlide] = createSignal(0);
  let timer: number;

  createEffect(() => {
    timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);

    onCleanup(() => clearInterval(timer));
  });

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    clearInterval(timer);
    timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);
  };

  return (
    <div
      class="lg:rounded-[20px] text-white py-16 lg:py-32"
      style={{
        "background-image": `url(${CompanyThemeGradient})`,
        "background-size": 'cover',
        "background-position": 'center',
        "background-repeat": 'no-repeat',
      }}
      id="features"
    >
      <div class="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div class="mb-12">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] mb-6"
            style="background: linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%); border: 1px solid; border-image-source: linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54));"
          >
            <div class="flex items-center gap-2">
              <img src={FireSmartWhite} alt="" class="w-4 h-4" />
              <span class="text-white">Key features</span>
            </div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">
            Connect, Analyze, Automate - All in One Place.
          </h2>
          <p class="text-[#DEDEDE] mb-8 max-w-2xl">
            FireAI integrates with your business tools, turning scattered data
            into smart insights. Make faster decisions, optimize workflows and
            stay ahead with predictive analytics.
          </p>
          <Button variant="primary" size="large" onClick={() => window.open(links.demoLink, "_blank")}>
            Get a demo
          </Button>
        </div>

        {/* Features Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {features.map((feature, index) => (
            <Motion.div
              class={`w-full border rounded-[12px] bg-[#26263C26] backdrop-blur-[100px] p-6 ${index == 0 || index == 3 ? "lg:col-span-7" : "lg:col-span-5"} border-[#D2CECE4F]`}
              animate={{
                opacity: [0, 1],
                y: [10, 0],
              }}
              transition={{
                duration: 1,
                easing: "ease-in-out",
              }}
            >
              <h3 class="text-3xl md:text-2xl font-medium mb-2">
                {feature.title}
              </h3>
              <p class="text-[#FFFFFFB2] mb-6">{feature.description}</p>
              <div class="rounded-lg">
                <img src={feature.image} alt={feature.title} class="w-full" />
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Why FireAI Section */}
        <div class="mb-12">
          <div
            class="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6"
            style="background: linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%); border: 1px solid; border-image-source: linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54));"
          >
            <span class="flex items-center gap-2">
              <img src={FireSmartWhite} alt="" class="w-4 h-4" />
              <span class="text-white">Why FireAI</span>
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Turn Data into Growth
          </h2>
          <p class="text-gray-300 mb-8 max-w-2xl">
            Discover new business opportunities, optimize strategies, and make
            smarter, data-driven decisions with fast, accurate real-time
            insights.
          </p>
        </div>
        {/* Desktop Grid */}
        <div class="hidden lg:grid grid-cols-12 gap-6">
          {benefits.map((benefit) => (
            <div class="col-span-12 lg:col-span-3">
              <div
                class="rounded-[20px] p-6 h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20, 20, 38, 0.7) 0%, rgba(20, 20, 38, 0.3) 100%)",
                  border: "1px solid rgba(130, 133, 206, 0.1)",
                  "backdrop-filter": "blur(20px)", 
                  "-webkit-backdrop-filter": "blur(20px)",
                }}
              >
                <div class="mb-4">
                  <div
                    class="flex items-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20, 20, 38, 0.9) 0%, rgba(20, 20, 38, 0.4) 100%)",
                    }}
                  >
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      class="w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <h3 class="text-[20px] font-medium mb-3 text-white">
                  {benefit.title}
                </h3>
                <p class="text-[#A1A1A1] text-[15px] leading-[22px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div class="lg:hidden">
          <div
            class="rounded-[20px] p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(20, 20, 38, 0.7) 0%, rgba(20, 20, 38, 0.3) 100%)",
              border: "1px solid rgba(130, 133, 206, 0.1)",
              "backdrop-filter": "blur(20px)",
              "-webkit-backdrop-filter": "blur(20px)",
            }}
          >
            <div class="mb-4 h-[100px] lg:max-h-[150px]">
              <div
                class="flex items-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20, 20, 38, 0.9) 0%, rgba(20, 20, 38, 0.4) 100%)",
                }}
              >
                <img
                  src={benefits[currentSlide()].icon}
                  alt={benefits[currentSlide()].title}
                  class="w-[60px] h-[60px] my-auto"
                />
              </div>
            </div>
            <h3 class="text-[20px] font-medium mb-3 text-white">
              {benefits[currentSlide()].title}
            </h3>
            <p class="text-[#A1A1A1] text-[15px] leading-[22px]">
              {benefits[currentSlide()].description}
            </p>
          </div>

          {/* Mobile Carousel Navigation */}
          <div class="flex justify-center items-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <div
                class={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide()
                    ? "w-8 bg-[#2B4EE7]"
                    : "w-2 bg-[#A1A1A1]"
                  }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          {/* Get a demo button */}
          <div class="mt-8 flex justify-center">
            <Button variant="primary" size="large" onClick={() => window.open(links.demoLink, "_blank")}>
              Get a demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
