import { useState } from "react";
import { 
  HelpCircle, ShieldCheck, Truck, MapPin, 
  UserPlus, CreditCard, ChevronDown, MessageCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "General", "Services", "Security", "Billing"];

const faqs = [
  {
    question: "How do I report littering?",
    answer: "Click on 'Report Litter' in the navbar, fill the form, and optionally upload a photo or pin the location.",
    icon: <HelpCircle />,
    category: "General"
  },
  {
    question: "Can I schedule a waste pickup?",
    answer: "Yes! Just go to the 'Request Pickup' section and submit your location and type of waste.",
    icon: <Truck />,
    category: "Services"
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use secure authentication and don’t share your data without permission.",
    icon: <ShieldCheck />,
    category: "Security"
  },
  {
    question: "How can I track my pickup?",
    answer: "You can track your assigned recycler's location on the 'My Requests' page.",
    icon: <MapPin />,
    category: "Services"
  },
  {
    question: "Do I need an account?",
    answer: "You can browse as a guest, but an account lets you track history and earn points.",
    icon: <UserPlus />,
    category: "General"
  },
  {
    question: "How are services paid for?",
    answer: "Our services are free for households. Businesses have custom eco-plans.",
    icon: <CreditCard />,
    category: "Billing"
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Filter */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-8">
            Common <span className="text-emerald-600">Questions</span>
          </h2>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setActiveIndex(null); }}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === cat 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" 
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Masonry Style Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                layout
                key={faq.question}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`break-inside-avoid rounded-[2rem] border transition-all duration-300 ${
                  activeIndex === index 
                  ? "bg-stone-900 text-white border-stone-900 shadow-2xl" 
                  : "bg-stone-50 border-stone-100 dark:bg-gray-900 dark:border-gray-800"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex gap-4">
                    <div className={`p-2 rounded-lg ${activeIndex === index ? "bg-emerald-500" : "bg-emerald-100 text-emerald-600"}`}>
                      {faq.icon}
                    </div>
                    <span className="font-bold text-lg leading-tight">{faq.question}</span>
                  </div>
                  <ChevronDown className={`shrink-0 transition-transform ${activeIndex === index ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-8 pb-8 -mt-2 text-stone-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

       
      </div>
    </section>
  );
}