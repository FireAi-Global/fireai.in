'use client';

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FireSmart } from "@/public/assets/icons";
import cards from "@/data/home/howFireAiWorks";

const Card = ({ card }: { card: { image: StaticImageData; description: string; title: string; alt: string } }) => {
  return (
    <div className="text-center w-[280px] mx-auto relative overflow-hidden">
      <Image
        src={card.image}
        alt={card.description}
        width={280}
        height={380}
        className="h-[380px] w-[280px] z-20"
      />
    </div>
  );
};

export default function HowFireAiWorksSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ROTATION_INTERVAL = 5000; // 5 seconds per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto rotation setup
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div
      className="max-w-[1200px] mx-auto px-4 py-16"
      id="how-it-works"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-between items-start mb-10">
        <div className="w-full lg:w-fit text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F1F2FF] px-4 py-2 rounded-full mb-4 mx-auto">
            <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
            <span>4 easy step process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            How FireAI Works
          </h2>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <div className="text-center w-[280px] mx-auto rounded-[20px] relative overflow-hidden">
          <Image
            src={cards[currentSlide].image}
            alt={cards[currentSlide].alt}
            width={280}
            height={380}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-2">
            {cards.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#2B4EE7]" : "w-2 bg-[#E5E7EB]"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
