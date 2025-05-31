'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Hero } from "@/public/assets/landing";
import Button from '@/components/general/buttons/index';
import Link from 'next/link';
import links from '@/data/links';
import { useModal } from '@/context/ModalContext';

export default function HeroSection() {
  const { openDemoModal } = useModal();
  
  return (
    <motion.div
      className="rounded-0 lg:rounded-[20px] flex flex-col text-center px-5 lg:px-0 bg-[#f8f8fc] border border-[rgba(130,133,206,0.2)]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className="mx-auto">
        <div className="w-full md:w-8/12 mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pt-35 font-medium">
            AI-Powered Business{" "}
            <span className="bg-gradient-to-r from-[#322638] via-blue-400 to-[#322638] text-transparent bg-clip-text">
              Intelligence{" "}
            </span>
            <br className="hidden lg:block" />
            at Your Fingertips
          </h2>
          <h3 className="text-sm md:text-base lg:text-lg mx-5 mt-2 lg:mt-8 lg:mx-16 lg:px-10 my-5 lg:my-0">
            Your business generates loads of data, but without the right tools, it
            just sits there. Slow decisions, wasted time and missed opportunities.
            FireAI fixes that.
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 justify-center mt-2 lg:mt-10">
            <div className="hidden lg:block">
              <Button variant="primary" onClick={openDemoModal}>Get a demo</Button>
            </div>
            <div className="hidden lg:block">
              <Button variant="secondary" onClick={() => window.open("https://dashboard.fireai.in", "_blank")}>Login</Button>
            </div>
            <div className="lg:hidden">
              <Link href={links.applicationLinks.login}>
                <Button variant="secondary" span="full">Login</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="m-0 overflow-hidden">
          <Image
            src={Hero.HeroImage}
            alt="Hero Dashboard"
            className="lg:w-[85%] mx-auto w-[380px] min-h-[200px]"
            width={800}
            height={400}
          />
        </div>        
      </div>
    </motion.div>
  );
}
