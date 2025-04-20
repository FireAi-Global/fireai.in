'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FireSmartWhite } from "@/public/assets/icons";
import { CompanyThemeGradient } from "@/public/assets/company";
import { benefits, features } from "@/data/home/keyFeatures";

export default function KeyFeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    clearInterval(timer);
    timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);
  };

  return (
    <div
      className="lg:rounded-[20px] text-white py-16 lg:py-32"
      style={{
        backgroundImage: `url(${CompanyThemeGradient.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="features"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] mb-6"
            style={{
              background: "linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%)",
              border: "1px solid",
              borderImageSource: "linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54))"
            }}
          >
            <div className="flex items-center gap-2">
              <Image src={FireSmartWhite} alt="" width={16} height={16} />
              <span className="text-white">Key features</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">
            Connect, Analyze, Automate - All in One Place.
          </h2>
          <p className="text-[#DEDEDE] mb-8 max-w-2xl mt-5">
            FireAI integrates with your business tools, turning scattered data
            into smart insights. Make faster decisions, optimize workflows and
            stay ahead with predictive analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`
                w-full border rounded-[12px] bg-[#26263C26] backdrop-blur-[100px] 
                ${index === 0 ? "pt-5" : "p-6"} 
                ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"} border-[#D2CECE4F]`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <div className={`${index === 0 ? "px-6" : ""}`}>
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
          <div
            className="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%)",
              border: "1px solid",
              borderImageSource: "linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54))"
            }}
          >
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
                <h3 className="text-[20px] font-medium text-white h-[50px] mb-5">
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
    </div>
  );
}
