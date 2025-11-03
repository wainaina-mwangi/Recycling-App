import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";
import ReportModal from "./ReportModal";
import { useState } from "react";


const HeroButton = ({ to, onClick, children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {onClick ? (
      <button
        onClick={onClick}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-xl hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 flex items-center justify-center gap-2 min-w-[180px]"
      >
        {children}
        <ArrowRight className="w-5 h-5 ml-1" />
      </button>
    ) : (
      <Link
        to={to}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-xl hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 flex items-center justify-center gap-2 min-w-[180px]"
      >
        {children}
        <ArrowRight className="w-5 h-5 ml-1" />
      </Link>
    )}
    {" "}
  </motion.div>
);

const HeroBackground = () => (
  <>
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      style={{
        background:
          "linear-gradient(45deg, #0f172a, #16a34a, #0f172a, #34d399)",
        backgroundSize: "400% 400%",
      }}
      transition={{
        opacity: { duration: 1.5, ease: "easeOut" },
        backgroundPosition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    />
    {" "}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div> 
    {" "}
  </>
);
// --- Main Hero Section ---

export default function HeroSection() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      // Added curved-bottom class and z-index back for visual curve and stacking context
      className="relative curved-bottom z-10 w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-24 md:py-32 bg-slate-900"
    >
       <HeroBackground />
      <div className="relative z-20 w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text and Buttons */}
          <motion.div
          
          >
        
            {/* Icon (assuming this is where Leaf is) */}
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
            
              <Leaf className="text-green-400 w-14 h-14 drop-shadow-xl" />
              
            </motion.div>
             {/* Heading (Fixing size) */}
            <motion.h1
              className="text-5xl sm:text-5xl font-semibold text-white mb-6 leading-snug drop-shadow-xl"
              variants={itemVariants}
            >
             A Cleaner Future  Starts With You 
            </motion.h1>
            {/* Paragraph */}
            <motion.p
              className="text-xl md:text-1xl text-gray-200 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Report litter, request eco-friendly pickups, and connect with
              local recyclers. Join the movement for a sustainable tomorrow.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {/* Now passing the onClick handler to open the modal */}
              <HeroButton onClick={() => setIsReportModalOpen(true)}>
                Report Litter
              </HeroButton>
            </motion.div>
          </motion.div>
          {/* RIGHT COLUMN: Registration Form */}
          <div className="mt-12 lg:mt-0">
            <RegistrationForm />
          </div>
        </div>
      </div>
      {/* Report Modal (Positioned at the end) */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </section>
  );
}