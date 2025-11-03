

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Framer Motion backdrop variants for smooth fade-in/out
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // Framer Motion modal variants for a scale/y-axis entrance
  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0, scale: 0.8 },
    visible: { y: "0", opacity: 1, scale: 1, transition: { duration: 0.2, type: "spring", damping: 25, stiffness: 500 } },
    exit: { y: "100vh", opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your litter report has been submitted.");
    onClose(); // Close the modal after submission (or redirection)
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose} // Close modal when clicking backdrop
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg p-6 md:p-8"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 border-b pb-3 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Report Illegal Litter
              </h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content / Form */}
            <form onSubmit={handleReportSubmit} className="space-y-4">
              
              {/* Location Input (Example) */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location / Address
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="e.g., Corner of Main St and Elm Ave"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Description Textarea */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Details of the Litter
                </label>
                <textarea
                  id="details"
                  rows="3"
                  placeholder="e.g., Abandoned tires and plastic waste near the riverbank."
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Submit Report
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;