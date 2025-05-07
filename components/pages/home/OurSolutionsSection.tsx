'use client';

import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FireSmart } from "@/public/assets/icons";
import slides from "@/data/home/ourSolutions";

// Memoized Feature component for better performance
const Feature = memo(({ feature }: { feature: { title: string; description: string } }) => (
  <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
    <div className="mt-1 flex-shrink-0">
      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0600A3] to-[#0169FD] flex items-center justify-center shadow-sm">
        <span className="text-white text-sm">✓</span>
      </div>
    </div>
    <span>
      <b className="font-medium">{feature.title}</b>: {feature.description}
    </span>
  </div>
));

Feature.displayName = 'Feature';

export default function OurSolutionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ROTATION_INTERVAL = 5000; // 5 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);
  
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Optimized auto rotation setup
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isPaused) {
      intervalId = setInterval(nextSlide, ROTATION_INTERVAL);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused, nextSlide, ROTATION_INTERVAL]);
  
  // Enhanced animation variants for smoother transitions
  const slideVariants = {
    enter: { opacity: 0, x: 50, scale: 0.98 },
    center: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1.0],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: -50, 
      scale: 0.98,
      transition: { 
        duration: 0.3, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };
  
  // Child animation variants for staggered animations
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16"
      id="solutions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      aria-label="Our Solutions"
    >
      {/* Header with Controls */}
      <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 bg-gray-50 shadow-sm">
            <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
            <span className="text-gray-700 font-medium text-sm">Our Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Simplifying <span className="bg-gradient-to-r from-[#0600A3] via-[#322638] to-[#0169FD] text-transparent bg-clip-text">Complex Data</span>{" "}
            <br className="hidden md:block" />
            for Smarter and Faster Decisions
          </h2>
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-[#0915A03D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.825 9H16V7H3.825L9.425 1.4L8 0L0 8L8 16L9.425 14.6L3.825 9Z" fill="url(#paint0_linear_1195_284)"/>
              <defs>
              <linearGradient id="paint0_linear_1195_284" x1="15.9986" y1="8.00098" x2="-0.000205996" y2="8.00098" gradientUnits="userSpaceOnUse">
              <stop offset="0.32" stopColor="#0600A3"/>
              <stop offset="1" stopColor="#0169FD"/>
              </linearGradient>
              </defs>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-[#0915A03D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="url(#paint0_linear_1195_51)"/>
              <defs>
                <linearGradient id="paint0_linear_1195_51" x1="0.00139609" y1="8.00098" x2="16.0002" y2="8.00098" gradientUnits="userSpaceOnUse">
                <stop offset="0.32" stopColor="#0600A3"/>
                <stop offset="1" stopColor="#0169FD"/>
              </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative bg-[#F6F8FA] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 md:p-8 lg:p-12 border border-[#0915A03D] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={`content-${currentSlide}`}
                className="space-y-8 absolute w-full"
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
                  <span className="text-gray-700 flex items-center gap-3">
                    <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
                    {slides[currentSlide].title}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {slides[currentSlide].heading}
                </h3>

                <p className="text-gray-600">{slides[currentSlide].description}</p>

                <motion.div className="space-y-4">
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={childVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Feature feature={feature} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
            {/* Invisible spacer div to maintain height */}
            <div className="invisible">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
                  <span className="text-gray-700 flex items-center gap-3">
                    <div className="w-4 h-4"></div>
                    {slides[0].title}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">{slides[0].heading}</h3>
                <p className="text-gray-600">{slides[0].description}</p>
                <div className="space-y-4">
                  {slides[0].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5"></div>
                      </div>
                      <span><b>{feature.title}</b>: {feature.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={`image-${currentSlide}`}
                className="absolute w-full"
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={`${slides[currentSlide].title} - ${slides[currentSlide].heading}`}
                  width={600}
                  height={400}
                  className="rounded-lg w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="eager"
                  quality={90}
                />
              </motion.div>
            </AnimatePresence>
            {/* Invisible spacer div to maintain height */}
            <div className="invisible">
              <Image
                src={slides[0].image}
                alt="Solution preview"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators and Controls */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-[#0915A03D] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
            <path 
              d="M10 12L6 8L10 4" 
              stroke="url(#paint1_linear_mobile_prev)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="paint1_linear_mobile_prev" x1="10" y1="8" x2="6" y2="8" gradientUnits="userSpaceOnUse">
                <stop offset="0.32" stopColor="#0600A3"/>
                <stop offset="1" stopColor="#0169FD"/>
              </linearGradient>
            </defs>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="sm:hidden">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out transform ${index === currentSlide 
                ? "w-8 bg-gradient-to-r from-[#0600A3] to-[#0169FD]" 
                : "w-2 bg-gray-200 hover:bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-[#0915A03D] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
            <path 
              d="M6 12L10 8L6 4" 
              stroke="url(#paint2_linear_mobile_next)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="paint2_linear_mobile_next" x1="6" y1="8" x2="10" y2="8" gradientUnits="userSpaceOnUse">
                <stop offset="0.32" stopColor="#0600A3"/>
                <stop offset="1" stopColor="#0169FD"/>
              </linearGradient>
            </defs>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="sm:hidden">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.section>
  );
}
