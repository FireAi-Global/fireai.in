'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FireSmart } from "@/public/assets/icons";
import slides from "@/data/home/ourSolutions";

export default function OurSolutionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ROTATION_INTERVAL = 5000; // 5 seconds per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto rotation setup
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <motion.div
      className="max-w-[1200px] mx-auto px-5 py-10 lg:py-16"
      id="solutions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Controls */}
      <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
            <span className="text-gray-700">Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Simplifying <span className="bg-gradient-to-r from-[#0600A3] via-[#322638] to-[#0169FD] text-transparent bg-clip-text">Complex Data</span>{" "}
            <br className="hidden md:block" />
            for Smarter and Faster Decisions
          </h2>
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative bg-gray-50 rounded-[32px] p-4 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <span className="text-gray-700 flex items-center gap-2">
                <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
                {slides[currentSlide].title}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">
              {slides[currentSlide].heading}
            </h3>

            <p className="text-gray-600">{slides[currentSlide].description}</p>

            <div className="space-y-4">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0600A3] to-[#0169FD] flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Image
              src={slides[currentSlide].image}
              alt="Solution preview"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="flex justify-center items-center gap-8 mt-8 lg:hidden">
        <button
          onClick={prevSlide}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#2B4EE7] w-8" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
