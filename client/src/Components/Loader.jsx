
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] flex flex-col items-center justify-center text-center px-6">
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24 border-4 border-green-600 border-t-transparent rounded-full mb-6"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold text-green-700 dark:text-green-400"
      >
        Loading ...
      </motion.h1>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-300 mt-2"
      >
        ♻️ Empowering Clean Communities Together
      </motion.p>
    </div>
  );
}
