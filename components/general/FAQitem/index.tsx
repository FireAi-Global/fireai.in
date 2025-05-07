'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from "@/public/assets/icons";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-[rgba(130,133,206,0.2)] rounded-[12px] p-6 cursor-pointer"
      id="faq"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base text-black">{question}</h3>
        <button 
          className="text-blue-500 w-4 h-4 lg:w-8 lg:h-8 min-w-[28px] min-h-[28px] flex items-center justify-center"
          aria-label={isOpen ? `Collapse answer for: ${question}` : `Expand answer for: ${question}`}
          aria-expanded={isOpen}
        >
          <span className="text-xl leading-none mb-[2px]">
            {isOpen ? (
              <Image src={Minus} alt="Minus" width={16} height={16} />
            ) : (
              <Image src={Plus} alt="Plus" width={16} height={16} />
            )}
          </span>
        </button>
      </div>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
}
