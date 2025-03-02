import { Component, createSignal } from 'solid-js';
import { FireSmart } from '../../assets/icons';

const faqs = [
    {
        question: "Do we have to link the data source to FireAI?",
        answer: "Answer text here..."
    },
    {
        question: "Which file types does FireAI support for data analysis?",
        answer: "Answer text here..."
    },
    {
        question: "What security measures safeguard my data?",
        answer: "Answer text here..."
    },
    {
        question: "Can I analyze spreadsheets with multiple tabs?",
        answer: "Answer text here..."
    },
    {
        question: "Are there restrictions on data file sizes for upload?",
        answer: "Answer text here..."
    },
    {
        question: "How can I keep up with new features and updates?",
        answer: "Answer text here..."
    },
    {
        question: "How do I export or share analysis results?",
        answer: "Answer text here..."
    },
    {
        question: "What are the limitations of the free version?",
        answer: "Answer text here..."
    }
];

const FAQItem: Component<{ question: string; answer: string }> = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
        <div class="border border-[rgba(130,133,206,0.2)] rounded-[12px] p-6 cursor-pointer" id="faq"
             onClick={() => setIsOpen(!isOpen())}>
            <div class="flex justify-between items-center">
                <h3 class="text-base text-black">{props.question}</h3>
                <button class="text-blue-500 w-4 h-4 lg:w-8 lg:h-8 min-w-[28px] min-h-[28px] flex items-center justify-center rounded-full border border-blue-500">
                    <span class="text-xl leading-none mb-[2px]">{isOpen() ? '-' : '+'}</span>
                </button>
            </div>
            {isOpen() && (
                <p class="mt-4 text-gray-300">
                    {props.answer}
                </p>
            )}
        </div>
    );
};

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
                    {faqs.slice(0, 4).map(faq => (
                        <FAQItem 
                            question={faq.question} 
                            answer={faq.answer}
                        />
                    ))}
                </div>
                
                {/* Right Column */}
                <div class="space-y-4">
                    {faqs.slice(4).map(faq => (
                        <FAQItem 
                            question={faq.question} 
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQsSection;