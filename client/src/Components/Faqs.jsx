import { useState } from "react";
import {
  HelpCircle,
  Info,
  ShieldCheck,
  AlertTriangle,
  Truck,
  MapPin,
  UserPlus,
  CreditCard,
  Plus, 
  Minus,
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
  {
    question: "How can I track my pickup request?",
    answer:
      "After submitting your request, a recycler will be assigned, and you can track their location and estimated time of arrival on the 'My Requests' page.",
    icon: <MapPin className="text-blue-600 w-6 h-6" />,
  },
  {
    question: "Do I need to create an account?",
    answer:
      "While you can browse as a guest, creating an account allows you to track your requests, save your details for future pickups, and get personalized tips.",
    icon: <UserPlus className="text-purple-600 w-6 h-6" />,
  },
  {
    question: "How are recycling services paid for?",
    answer:
      "Our services are completely free for households. Businesses may have different pricing which can be viewed after creating a business account.",
    icon: <CreditCard className="text-gray-600 w-6 h-6" />,
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 mt-6 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                layout
                className={`rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                  isActive ? "bg-white dark:bg-gray-800 border-l-4 border-green-600" : "bg-gray-50 dark:bg-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-4 text-lg text-gray-800 dark:text-gray-100 font-medium">
                    {faq.icon}
                    <span>{faq.question}</span>
                  </div>
                
                  {isActive ? (
                    <Minus className="w-6 h-6 text-green-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-500" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="faq-content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}