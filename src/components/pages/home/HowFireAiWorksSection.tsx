import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { FireSmart } from "../../../assets/icons";
import cards from "../../../data/home/howFireAiWorks";

const Card = ({ card }: { card: any }) => {
  return (
    <div class="text-center w-[280px] mx-auto relative overflow-hidden">
      <img
        src={card.image}
        alt={card.description}
        class="h-[380px] w-[280px] z-20"
      />

    </div>
  );
};

const HowFireAiWorksSection: Component = () => {
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [isPaused, setIsPaused] = createSignal(false);
  const ROTATION_INTERVAL = 5000; // 5 seconds per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto rotation setup
  onMount(() => {
    const intervalId = setInterval(() => {
      if (!isPaused()) {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
      }
    }, ROTATION_INTERVAL);

    onCleanup(() => clearInterval(intervalId));
  });

  return (
    <div
      class="max-w-[1200px] mx-auto px-4 py-16"
      id="how-it-works"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
      </div>

      {/* Desktop Grid */}
      <div class="hidden lg:grid grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Card card={card} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div class="lg:hidden">
        <div class="text-center w-[280px] mx-auto rounded-[20px] relative overflow-hidden">
          <img
            src={cards[currentSlide()].image}
            alt={cards[currentSlide()].alt}
            class="w-full h-[380px] object-cover"
          />
        </div>

        {/* Navigation Controls */}
        <div class="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
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
                class={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide() ? "w-8 bg-[#2B4EE7]" : "w-2 bg-[#E5E7EB]"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
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
