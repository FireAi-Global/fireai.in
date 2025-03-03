import { Component } from "solid-js";
import { FireSmart } from "../../../assets/icons";
import faqs from "../../../data/home/faqs";
import FAQItem from "../../general/FAQitem";
const FAQsSection: Component = () => {
  return (
    <div class="max-w-[1200px] mx-auto px-4 py-16">
      {/* Header */}
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-[#F8FAFC] bg-opacity-10 px-4 py-2 rounded-full mb-6">
          <img src={FireSmart} alt="FireSmart" />
          <span class="">FAQS</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div class="space-y-4">
          {faqs.slice(0, 4).map((faq) => (
            <FAQItem question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Right Column */}
        <div class="space-y-4">
          {faqs.slice(4).map((faq) => (
            <FAQItem question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
