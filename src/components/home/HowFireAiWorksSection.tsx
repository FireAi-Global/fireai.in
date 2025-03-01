import { Component } from 'solid-js';
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
    return (
        <div class="max-w-[1200px] mx-auto px-4 py-16">
            {/* Header */}
            <div class="mb-12">
                <div class="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                    <img src={FireSmart} alt="FireSmart" class="text-[#070C47]" />
                    <span class="text-gray-700">How FireAI Works</span>
                </div>
                <h2 class="text-[40px] font-medium leading-tight">
                    Simplifying <span class="text-blue-600">Complex Data</span>
                    <br />for Smarter and Faster Decisions
                </h2>
            </div>

            {/* Updated Cards Grid */}
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                {cards.map(card => (
                    <div class="bg-white rounded-[20px] overflow-hidden shadow-lg text-center">
                        {/* Image Container First */}
                        <div class="relative h-[280px] w-[270px] bg-[#F8FAFC]">
                            <img 
                                src={card.image} 
                                alt={card.alt} 
                                class="w-full h-full object-contain p-4"
                            />
                        </div>
                        
                        {/* Text Content Below */}
                        <div class="p-4 mt-[-20px] relative">
                            <h3 class="text-[20px] font-medium mb-2">{card.title}</h3>
                            <p class="text-gray-600 text-sm">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowFireAiWorksSection;