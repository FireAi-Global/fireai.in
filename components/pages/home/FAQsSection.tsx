'use client';

import Image from 'next/image';
import { FireSmart } from "@/public/assets/icons";
import faqs from "@/data/home/faqs";
import FAQItem from "../../general/FAQitem";

export default function FAQsSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
          <Image src={FireSmart} alt="FireSmart" width={20} height={20} />
          <span>FAQS</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {faqs.slice(0, 4).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {faqs.slice(4).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
