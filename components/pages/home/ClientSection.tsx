'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import clientLogos from "@/data/home/clientLogos";

export default function ClientSection() {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h2 className="text-[20px] font-medium text-gray-800 mb-12">
        Trusted by Leading Businesses
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-center items-center gap-20 flex-wrap">
        {clientLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
            width={120}
            height={40}
          />
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="lg:hidden relative w-full">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1035], // Adjust this value based on your content width
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-5 object-contain"
                width={60}
                height={20}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
