// src/components/HowItWorks.jsx
import { MapPin, Camera, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Report Litter or Request Pickup",
    description: "Let us know about trash nearby or request a recycling truck.",
    icon: <MapPin className="w-12 h-12 text-green-700 bg-green-200 p-2 rounded-full shadow-md" />,
  },
  {
    id: 2,
    title: "Upload Photo or Location",
    description: "Add a picture or pin the location for faster response.",
    icon: <Camera className="w-12 h-12 text-green-700 bg-green-200 p-2 rounded-full shadow-md" />,
  },
  {
    id: 3,
    title: "Get Matched with a Recycler",
    description: "Nearby recyclers get notified and assigned automatically.",
    icon: <Truck className="w-12 h-12 text-green-700 bg-green-200 p-2 rounded-full shadow-md" />,
  },
  {
    id: 4,
    title: "Pickup Completed",
    description: "Once waste is collected, you'll receive a confirmation.",
    icon: <CheckCircle className="w-12 h-12 text-green-700 bg-green-200 p-2 rounded-full shadow-md" />,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
