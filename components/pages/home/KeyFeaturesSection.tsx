'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FireSmartWhite } from "@/public/assets/icons";
// CompanyThemeGradient removed as it's not being used
import { benefits, features } from "@/data/home/keyFeatures";
import Button from "@/components/general/buttons";
import { useModal } from "@/context/ModalContext";

export default function KeyFeaturesSection() {
  const { openDemoModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16 bg-[#0A0A0A] text-white rounded-[20px]"
      id="features"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6">
            <div className="flex items-center gap-2">
              <Image src={FireSmartWhite} alt="" width={16} height={16} />
              <span className="text-white">Key features</span>
            </div>
          </div>
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6">
            Connect, Analyze, Automate - All in One Place.
          </h2>
          <p className="text-[#A1A1A1] text-base sm:text-lg max-w-[600px] mb-6 sm:mb-8">
            FireAI transforms your business data from complex spreadsheets
            into smart insights. Make faster decisions, optimize workflows and
            stay ahead with predictive analytics.
          </p>
          
          <Button variant="primary" onClick={openDemoModal}>
            Get a demo
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`
                w-full border rounded-[12px] bg-[#26263C26] backdrop-blur-[100px] p-6
                ${index === 0 || index === 3 ? "lg:col-span-6" : "lg:col-span-6"} border-[#D2CECE4F]`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
            >
              <div>
                <h3 className="text-3xl md:text-2xl font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFFB2] mb-6">{feature.description}</p>
              </div>
              <div className="rounded-lg">
                <Image src={feature.image} alt={feature.title} width={800} height={400} className="w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why FireAI Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6">
            <span className="flex items-center gap-2">
              <Image src={FireSmartWhite} alt="" width={16} height={16} />
              <span className="text-white">Why FireAI</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Turn Data into Growth
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Discover new business opportunities, optimize strategies, and make
            smarter, data-driven decisions with fast, accurate real-time
            insights.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-span-12 lg:col-span-3 max-h-[300px]">
              <div
                className="rounded-[20px] p-6 h-[300px]"
                style={{
                  background: "linear-gradient(180deg, rgba(20, 20, 38, 0.7) 0%, rgba(20, 20, 38, 0.3) 100%)",
                  border: "1px solid rgba(130, 133, 206, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="mb-4 h-[80px]">
                  <div className="flex items-center">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <h3 className="text-[20px] font-medium text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#A1A1A1] text-[15px] leading-[22px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden max-h-[280px]">
          <div
            className="rounded-[20px] px-6 min-h-[280px] max-h-[280px]"
            style={{
              background: "linear-gradient(180deg, rgba(20, 20, 38, 0.7) 0%, rgba(20, 20, 38, 0.3) 100%)",
              border: "1px solid rgba(130, 133, 206, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="mb-4">
              <div className="flex items-center h-[100px]">
                <Image
                  src={benefits[currentSlide].icon}
                  alt={benefits[currentSlide].title}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] my-auto"
                />
              </div>
            </div>
            <h3 className="text-[20px] font-medium mb-3 text-white h-[50px]">
              {benefits[currentSlide].title}
            </h3>
            <p className="text-[#A1A1A1] text-[15px] leading-[22px]">
              {benefits[currentSlide].description}
            </p>
          </div>

          {/* Mobile Carousel Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? "w-8 bg-[#2B4EE7]" : "w-2 bg-[#A1A1A1]"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
