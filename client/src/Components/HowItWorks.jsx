// src/components/HowItWorks.jsx
import { MapPin, Camera, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Report Litter or Request Pickup",
    description: "Let us know about trash nearby or request a recycling truck.",
    icon: <MapPin className="w-12 h-12 text-white bg-green-500 p-2 rounded-full shadow-lg" />,
  },
  {
    id: 2,
    title: "Upload Photo or Location",
    description: "Add a picture or pin the location for faster response.",
    icon: <Camera className="w-12 h-12 text-white bg-green-500 p-2 rounded-full shadow-lg" />,
  },
  {
    id: 3,
    title: "Get Matched with a Recycler",
    description: "Nearby recyclers get notified and assigned automatically.",
    icon: <Truck className="w-12 h-12 text-white bg-green-500 p-2 rounded-full shadow-lg" />,
  },
  {
    id: 4,
    title: "Pickup Completed",
    description: "Once waste is collected, you'll receive a confirmation.",
    icon: <CheckCircle className="w-12 h-12 text-white bg-green-500 p-2 rounded-full shadow-lg" />,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
        >
          How It Works
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          RecyConnect makes it easy for citizens to take climate action in just four steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
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
