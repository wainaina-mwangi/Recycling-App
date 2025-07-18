import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Info,
  ShieldCheck,
  AlertTriangle,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I report littering?",
    answer:
      "Click on 'Report Litter' in the navbar, fill the form, and optionally upload a photo or pin the location.",
    icon: <HelpCircle className="text-green-600 w-6 h-6" />,
  },
  {
    question: "Can I schedule a waste pickup?",
    answer:
      "Yes! Just go to the 'Request Pickup' section and submit your location and type of waste.",
    icon: <Truck className="text-green-600 w-6 h-6" />,
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We use secure authentication and don’t share your data without permission.",
    icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
  },
  {
    question: "What items can I recycle?",
    answer:
      "We support plastics, glass, paper, metal, and e-waste. You can check guidelines in the ‘Tips’ section.",
    icon: <Info className="text-green-600 w-6 h-6" />,
  },
  {
    question: "What if no recycler picks my request?",
    answer:
      "You can resubmit after 12 hours or contact support directly for help.",
    icon: <AlertTriangle className="text-yellow-600 w-6 h-6" />,
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 mt-10" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100 font-semibold">
                  {faq.icon}
                  {faq.question}
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } text-gray-500`}
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="faq-content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pt-0 pb-4 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
