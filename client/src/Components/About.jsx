import { motion } from "framer-motion";
import { Recycle, MapPin, Truck } from "lucide-react"; // Helpful for scannability

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-stone-50 dark:bg-gray-900 py-24 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Interactive Image Stack */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800">
            <img
              src="https://ik.imagekit.io/tba7zelzb/about.jpeg.png?updatedAt=1752762540645"
              alt="Our Impact"
              className="object-cover w-full aspect-square hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hidden md:block border border-emerald-100">
            <p className="text-3xl font-bold text-emerald-600">SDG 12</p>
            <p className="text-xs text-stone-500 uppercase font-semibold">Global Mission</p>
          </div>
        </motion.div>

        {/* Right Column: Text Section */}
        <div className="flex flex-col gap-6">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white leading-tight">
              Empowering Waste <br /> 
              <span className="text-emerald-600">Responsibility</span>
            </h2>
          </motion.div>

          <motion.p 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 dark:text-gray-300 leading-relaxed"
          >
            <span className="font-bold text-emerald-600">RecyConnect</span> is a sustainability-focused platform that empowers users
            to report litter, request eco-friendly waste pickups, and connect with certified recyclers instantly.
          </motion.p>

          {/* Efficiency: Icon Grid for key features */}
          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          >
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-stone-100 dark:border-gray-700">
              <MapPin className="text-emerald-500 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800 dark:text-gray-200">Local Impact</h4>
                <p className="text-sm text-stone-500">Find recyclers in your area.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-stone-100 dark:border-gray-700">
              <Truck className="text-emerald-500 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800 dark:text-gray-200">Easy Pickups</h4>
                <p className="text-sm text-stone-500">Request waste collection.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
            className="mt-4 pt-6 border-t border-stone-200 dark:border-gray-700"
          >
             <p className="text-sm text-stone-500 dark:text-gray-400 flex items-center gap-2">
              <span className="text-xl">💚</span> 
              <span>Proudly contributing to SDG 12: Responsible Consumption & Production.</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}