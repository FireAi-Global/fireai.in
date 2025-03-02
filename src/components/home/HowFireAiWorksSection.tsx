import { Component, createSignal } from 'solid-js';
import { FireSmart } from '../../assets/icons';
import { HowFireAiWorks } from '../../assets/landing';

const cards = [
    {
        title: "1. Connect",
        description: "Easily links to your databases, Tally and other business tools.",
        image: HowFireAiWorks.FirstImage,
        alt: "Connect to your databases, Tally and other business tools"
    },
    {
        title: "2. Extract",
        description: "Extract data from your databases, Tally and other business tools.",
        image: HowFireAiWorks.SecondImage,
        alt: "Extract data from your databases, Tally and other business tools"
    },
    {
        title: "3. Analyze",
        description: "Analyze the data with our AI-powered system.",
        image: HowFireAiWorks.ThirdImage,
        alt: "Analyze the data with our AI-powered system"
    },
    {
        title: "4. Share",
        description: "Share insights with your team and make informed decisions together in real-time.",
        image: HowFireAiWorks.FourthImage,
        alt: "Share insights with your team and make informed decisions together in real-time"
    }
];

const HowFireAiWorksSection: Component = () => {
    const [currentSlide, setCurrentSlide] = createSignal(0);

    return (
        <div class="max-w-[1200px] mx-auto px-4 py-16" id="how-it-works">
            {/* Header */}
            <div class="text-center mb-12">
                <div class="inline-flex items-center gap-2 bg-[#F1F2FF] px-4 py-2 rounded-full mb-4">
                    <img src={FireSmart} alt="FireSmart" class="w-4 h-4" />
                    <span class="text-[#2B4EE7]">4 easy step process</span>
                </div>
                <h2 class="text-[32px] font-medium">
                    How FireAI Works
                </h2>
            </div>

            {/* Desktop Grid */}
            <div class="hidden lg:grid grid-cols-4 gap-6">
                {cards.map(card => (
                    <div class="bg-white rounded-[20px] overflow-hidden shadow-lg text-center">
                        <div class="relative h-[280px] w-[270px] bg-[#F8FAFC]">
                            <img 
                                src={card.image} 
                                alt={card.alt} 
                                class="w-full h-full object-contain p-4"
                            />
                        </div>
                        <div class="p-4 mt-[-20px] relative">
                            <h3 class="text-[20px] font-medium mb-2">{card.title}</h3>
                            <p class="text-gray-600 text-sm">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div class="lg:hidden">
                <div class="bg-[#F8F9FF] rounded-[24px] p-8">
                    {/* Current Slide Content */}
                    <div class="mb-8">
                        <img 
                            src={cards[currentSlide()].image} 
                            alt={cards[currentSlide()].alt} 
                            class="w-full rounded-lg"
                        />
                    </div>
                    <div class="text-center">
                        <h3 class="text-[24px] font-medium mb-2">
                            {cards[currentSlide()].title}
                        </h3>
                        <p class="text-gray-600 text-[16px]">
                            {cards[currentSlide()].description}
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div class="flex justify-center items-center gap-4 mt-8">
                        {/* Left Arrow */}
                        <button 
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)}
                            class="w-10 h-10 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        {/* Dots */}
                        <div class="flex gap-2">
                            {cards.map((_, index) => (
                                <div
                                    class={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide() 
                                            ? "w-8 bg-[#2B4EE7]" 
                                            : "w-2 bg-[#E5E7EB]"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button 
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % cards.length)}
                            class="w-10 h-10 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowFireAiWorksSection;