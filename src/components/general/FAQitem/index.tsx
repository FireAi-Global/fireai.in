import { Component, createSignal } from "solid-js";

const FAQItem: Component<{ question: string; answer: string }> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div
      class="border border-[rgba(130,133,206,0.2)] rounded-[12px] p-6 cursor-pointer"
      id="faq"
      onClick={() => setIsOpen(!isOpen())}
    >
      <div class="flex justify-between items-center">
        <h3 class="text-base text-black">{props.question}</h3>
        <button class="text-blue-500 w-4 h-4 lg:w-8 lg:h-8 min-w-[28px] min-h-[28px] flex items-center justify-center rounded-full border border-blue-500">
          <span class="text-xl leading-none mb-[2px]">
            {isOpen() ? "-" : "+"}
          </span>
        </button>
      </div>
      {isOpen() && <p class="mt-4 text-gray-600">{props.answer}</p>}
    </div>
  );
}

export default FAQItem;
