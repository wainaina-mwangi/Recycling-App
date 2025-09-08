// src/components/HeroSection.jsx
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/2156993014/photo/portrait-of-an-african-american-truck-driver.jpg?s=612x612&w=0&k=20&c=EKtoeRAup8Ftfos8C3Urx81Pa02a-oixObtkqqsLs_Q=')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      ></motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        {/* Icon with pop animation */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <Leaf className="text-green-400 w-12 h-12 drop-shadow-md" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          A Cleaner Future Starts With You
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Report litter, request eco-friendly pickups, and connect with local recyclers.  
          Join the movement for a sustainable tomorrow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/recyclers"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-400 transition flex items-center justify-center gap-2"
            >
              Find Recyclers <ArrowRight />
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.6 }}
          >
           <Link
              to="/recyclers"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-400 transition flex items-center justify-center gap-2"
            >
              Report Litter <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
