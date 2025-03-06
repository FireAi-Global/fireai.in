import { createSignal } from "solid-js";
import { Carousel } from "../../../assets/landing";
import { FireSmart } from "../../../assets/icons";
import { Motion } from "solid-motionone";
import slides from "../../../data/home/ourSolutions";

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = createSignal(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Motion.div class="max-w-[1200px] mx-auto px-5 py-10 lg:py-16" id="solutions">
      {/* Header */}
      <div class="mb-12">
        <div class="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
          <img src={FireSmart} alt="FireSmart" class="w-4 h-4" />
          <span class="text-gray-700">Our Solutions</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Simplifying <span class="text-blue-600">Complex Data</span>{" "}
          <br class="hidden md:block" />
          for Smarter and Faster Decisions
        </h2>
      </div>

      {/* Carousel Content */}
      <div class="relative bg-gray-50 rounded-[32px] p-4 lg:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <span class="text-gray-700 flex items-center gap-2">
                <img src={FireSmart} alt="FireSmart" class="w-4 h-4" />
                {slides[currentSlide()].title}
              </span>
            </div>

            <h3 class="text-3xl md:text-4xl lg:text-5xl font-medium">
              {slides[currentSlide()].heading}
            </h3>

            <p class="text-gray-600">{slides[currentSlide()].description}</p>

            <div class="space-y-4">
              {slides[currentSlide()].features.map((feature) => (
                <div class="flex items-start gap-3">
                  <div class="mt-1 flex-shrink-0">
                    <div class="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span class="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <p class="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div class="relative">
            <img
              src={slides[currentSlide()].image}
              alt="Solution preview"
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Navigation Controls */}
      </div>
      <div class="flex justify-center items-center gap-8 mt-8">
        <button
          onClick={prevSlide}
          class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="flex gap-2">
          {slides.map((_, index) => (
            <button
              onClick={() => setCurrentSlide(index)}
              class={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide() ? "bg-[#2B4EE7] w-8" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Motion.div>
  );
};

export default CarouselSection;
