import { MapPin, Camera, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Report & Request",
    description: "Pinpoint litter locations or schedule a professional recycling pickup with a single tap.",
    icon: <MapPin className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "02",
    title: "Snap & Verify",
    description: "Upload photos to help our teams identify the waste type and prepare the right equipment.",
    icon: <Camera className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1605600611284-195205731622?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "03",
    title: "Smart Dispatch",
    description: "Our AI matches your request with the nearest certified recycler for rapid response.",
    icon: <Truck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591193583844-407caf30029a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "04",
    title: "Eco-Confirmation",
    description: "Get notified once the area is clean and track your personal contribution to the planet.",
    icon: <CheckCircle className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-stone-500 dark:text-gray-400 max-w-xl mx-auto">
            From the moment you report waste to the final confirmation, we ensure every step is handled with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-[2.5rem] bg-stone-900 shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={step.image} 
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Step ID Badge */}
                <span className="absolute top-8 right-8 text-white/20 text-4xl font-black italic">
                  {step.id}
                </span>

                {/* Icon Circle */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                  {step.icon}
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {step.description}
                </p>

                {/* Decorative Accent Line */}
                <div className="w-8 h-1 bg-emerald-500 mt-4 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;