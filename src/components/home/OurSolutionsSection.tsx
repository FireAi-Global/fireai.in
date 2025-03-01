import { createSignal } from "solid-js";
import { Carousel } from "../../assets/landing";
import { FireSmart } from "../../assets/icons"

const CarouselSection = () => {
        const [currentSlide, setCurrentSlide] = createSignal(0);
    
        const slides = [
            {
                title: "Turn Data Chaos into clarity",
                heading: "Extend or Integrate with your favourite tools",
                description: "Start as a basic task tracking tool. Customize your work-flows based on Backlog, Unstarted, Started, Completed issues, in just a few seconds, and view it as you like.",
                features: [
                    "Visualize as you like. Switch between List, Kanban, or Calendar across any views within clicks.",
                    "Visualize as you like. Switch between List, Kanban, or Calendar across any views within clicks."
                ],
                image: Carousel.Frame1
            }
        ];
    
        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        };
    
        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        };
    
        return (
            <div class="max-w-[1200px] mx-auto px-4 py-16" id="solutions">
                {/* Header */}
                <div class="mb-12">
                    <div class="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                        <img src={FireSmart} alt="FireSmart" class="w-4 h-4" />
                        <span class="text-gray-700">Our Solutions</span>
                    </div>
                    <h2 class="text-[40px] font-medium leading-tight">
                        Simplifying <span class="text-blue-600">Complex Data</span>
                        <br />for Smarter and Faster Decisions
                    </h2>
                </div>
    
                {/* Carousel Content */}
                <div class="relative bg-gray-50 rounded-[32px] p-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div class="space-y-8">
                            <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                                <span class="text-gray-700 flex items-center gap-2"><img src={FireSmart} alt="FireSmart" class="w-4 h-4" />{slides[currentSlide()].title}</span>
                            </div>
                            
                            <h3 class="text-[32px] font-medium">
                                {slides[currentSlide()].heading}
                            </h3>
                            
                            <p class="text-gray-600">
                                {slides[currentSlide()].description}
                            </p>
                            
                            <div class="space-y-4">
                                {slides[currentSlide()].features.map(feature => (
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
    
                    {/* Navigation Buttons */}
                    <div class="absolute right-8 bottom-8 flex gap-4">
                        <button 
                            onClick={prevSlide}
                            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <span class="text-gray-600">←</span>
                        </button>
                        <button 
                            onClick={nextSlide}
                            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <span class="text-gray-600">→</span>
                        </button>
                    </div>
    
                    {/* Dots */}
                    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <div 
                                class={`w-2 h-2 rounded-full ${
                                    index === currentSlide() 
                                        ? 'bg-blue-600' 
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default CarouselSection