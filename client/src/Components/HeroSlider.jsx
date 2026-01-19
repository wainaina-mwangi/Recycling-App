import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ReportModal from "./ReportModal";
import { useState } from "react";

// --- Simplified Hero Section ---
export default function HeroSection() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-stone-50 overflow-hidden py-20">
      {/* Background Decoration: Subtle Green Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 transform translate-x-20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text & Action */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Eco-Friendly Initiative</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 leading-tight">
              A Cleaner Future <br /> 
              <span className="text-emerald-600">Starts With You</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
              Report litter, request eco-friendly pickups, and connect with
              local recyclers. Join the movement for a sustainable tomorrow.
            </p>

            <button
              onClick={() => setIsReportModalOpen(true)}
              className="group flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all transform hover:-translate-y-1"
            >
              Report Litter Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* RIGHT COLUMN: Three Picture Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            {/* Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-1 row-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600" 
                alt="Recycling Bin" 
                className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            {/* Top Small Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" 
                alt="Nature Growth" 
                className="w-full h-[215px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>

            {/* Bottom Small Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400" 
                alt="Sorting Waste" 
                className="w-full h-[215px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </section>
  );
}