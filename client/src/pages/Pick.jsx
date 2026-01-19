import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, BadgeCheck, Car, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Pick() {
  const [status, setStatus] = useState({ type: null, message: "" }); // For UI feedback
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // --- RESTORED API LOGIC ---
  const onSubmit = async (data) => {
    try {
      setStatus({ type: null, message: "" });
      
      const response = await fetch("http://localhost:5000/api/pickups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Pickup request submitted successfully!" });
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      } else {
        console.error("Server error:", result);
        setStatus({ type: "error", message: "Failed to submit. Please try again." });
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus({ type: "error", message: "Something went wrong. Check connection." });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-emerald-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000" 
          alt="Recycling Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-emerald-950 to-emerald-950" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://ik.imagekit.io/tba7zelzb/truck.jpg?updatedAt=1752762540960"
              alt="Pickup Vehicle"
              className="relative rounded-3xl shadow-2xl mb-8 w-full object-cover border border-white/10"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Easy Waste <br />
            <span className="text-emerald-400">Pickup Service</span>
          </h2>
          <p className="text-emerald-100/80 text-lg leading-relaxed">
            Schedule a convenient pickup for your recyclables. We’ll come to you with the right vehicle and handle the rest.
          </p>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-black mb-8 text-emerald-900 dark:text-white">Schedule a Pickup</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Location Input */}
            <div className="space-y-1">
              <div className="relative">
                <MapPin className="absolute top-4 left-4 text-emerald-600" size={20} />
                <input
                  {...register("location", { required: "Location is required" })}
                  placeholder="📍 e.g., Kasarani, Nairobi"
                  className="w-full pl-12 pr-4 py-4 bg-emerald-50/50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all dark:text-white font-medium"
                />
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm font-bold mt-1 ml-2">{errors.location.message}</p>
              )}
            </div>

            {/* Number Plate */}
            <div className="space-y-1">
              <div className="relative">
                <BadgeCheck className="absolute top-4 left-4 text-emerald-600" size={20} />
                <input
                  {...register("numberPlate", {
                    required: "Number plate is required",
                    pattern: {
                      value: /^[A-Z]{3} \d{3}[A-Z]?$/,
                      message: "Format should be like KCA 123A",
                    },
                  })}
                  placeholder="🚗 e.g., KCA 123A"
                  className="w-full pl-12 pr-4 py-4 bg-emerald-50/50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all dark:text-white font-medium uppercase"
                />
              </div>
              {errors.numberPlate && (
                <p className="text-red-500 text-sm font-bold mt-1 ml-2">{errors.numberPlate.message}</p>
              )}
            </div>

            {/* Vehicle Type */}
            <div className="space-y-1">
              <div className="relative">
                <Car className="absolute top-4 left-4 text-emerald-600" size={20} />
                <select
                  {...register("vehicleType", { required: "Select a vehicle type" })}
                  className="w-full pl-12 pr-4 py-4 bg-emerald-50/50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all dark:text-white font-medium appearance-none"
                >
                  <option value="">🚚 Select Vehicle Type</option>
                  <option value="Truck">Truck</option>
                  <option value="Van">Van</option>
                  <option value="Motorbike">Motorbike</option>
                  <option value="Tuk Tuk">Tuk Tuk</option>
                </select>
              </div>
              {errors.vehicleType && (
                <p className="text-red-500 text-sm font-bold mt-1 ml-2">{errors.vehicleType.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? "Submitting..." : "Submit Pickup Request"}
              <Send size={20} />
            </button>

            {/* API Feedback Messages */}
            <AnimatePresence>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-center justify-center gap-2 font-bold py-2 ${
                    status.type === "success" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}