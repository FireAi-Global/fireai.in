import { Component, createSignal } from "solid-js";
import { FireSmart } from "../../../assets/icons";
import cards from "../../../data/home/howFireAiWorks";
import { Overlay } from "../../../assets/landing/howFireAIWorks";
import Button from "../../general/buttons";
import links from "../../../data/links";
const HowFireAiWorksSection: Component = () => {
  const [currentSlide, setCurrentSlide] = createSignal(0);

  return (
    <div class="max-w-[1200px] mx-auto px-4 py-16" id="how-it-works">
      <div class="flex justify-between items-start mb-10">
        <div class="w-full lg:w-fit text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-[#F1F2FF] px-4 py-2 rounded-full mb-4 mx-auto">
            <img src={FireSmart} alt="FireSmart" class="w-4 h-4" />
            <span>4 easy step process</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium">
            How FireAI Works
          </h2>
        </div>
        <div class="hidden lg:block">
          <Button variant="primary" size="medium" onClick={() => window.open(links.demoLink, "_blank")}>
            Get a demo
          </Button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div class="hidden lg:grid grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div class="text-center w-[280px] rounded-[20px] relative overflow-hidden">
            <div
              class="absolute inset-0 z-[1]"
              style={{
                "background": `url(${card.background}) no-repeat center center`,
                "background-size": "cover",
              }}
            />
            <img
              src={Overlay}
              alt="Overlay"
              class="absolute bottom-0 left-0 w-full h-[50%] z-20"
            />
            <div class="relative z-30 px-6">
              <img
                src={card.image}
                alt={card.alt}
                class="w-10/12 mx-auto h-[250px] object-contain"
              />
              <div class="text-center mt-[-20px]">
                <h3 class="text-xl font-medium mb-3">
                  {index + 1}. {card.title}
                </h3>
                <p class="text-[#494949] text-base">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div class="lg:hidden">
        <div class="bg-[#F8FAFC] rounded-[20px] p-6 mb-6">
          <img
            src={cards[currentSlide()].image}
            alt={cards[currentSlide()].alt}
            class="w-full h-auto"
          />
        </div>
        <div class="text-center">
          <h3 class="text-xl font-medium mb-3">
            {currentSlide() + 1}. {cards[currentSlide()].title}
          </h3>
          <p class="text-[#64748B] text-base">
            {cards[currentSlide()].description}
          </p>
        </div>

        {/* Navigation Controls */}
        <div class="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)}
            class="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="flex gap-2">
            {cards.map((_, index) => (
              <div
                onClick={() => setCurrentSlide(index)}
                class={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide() ? "w-8 bg-[#2B4EE7]" : "w-2 bg-[#E5E7EB]"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % cards.length)}
            class="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowFireAiWorksSection;
