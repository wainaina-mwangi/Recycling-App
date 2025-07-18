// src/pages/Pick.jsx
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Car } from "lucide-react";

export default function Pick() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/pickups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Pickup request submitted successfully!");
        reset();
      } else {
        console.error("Server error:", result);
        alert("❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong. Check console for details.");
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-50 px-6 mt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image and Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://ik.imagekit.io/tba7zelzb/truck.jpg?updatedAt=1752762540960"
            alt="Pickup Vehicle"
            className="rounded-2xl shadow-lg mb-6 w-full h-auto object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Easy Waste Pickup
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Schedule a convenient pickup for your recyclables. We’ll come to you with the right vehicle and handle the rest.
          </p>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Schedule a Pickup
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                {...register("location", { required: "Location is required" })}
                placeholder="📍 e.g., Kasarani, Nairobi"
                className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none"
              />
              {errors.location && (
                <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
              )}
            </div>

            {/* Number Plate */}
            <div className="relative">
              <BadgeCheck className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                {...register("numberPlate", {
                  required: "Number plate is required",
                  pattern: {
                    value: /^[A-Z]{3} \d{3}[A-Z]?$/,
                    message: "Format should be like KCA 123A",
                  },
                })}
                placeholder="🚗 e.g., KCA 123A"
                className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none"
              />
              {errors.numberPlate && (
                <p className="text-red-600 text-sm mt-1">{errors.numberPlate.message}</p>
              )}
            </div>

            {/* Vehicle Type */}
            <div className="relative">
              <Car className="absolute top-3 left-3 text-gray-400" size={18} />
              <select
                {...register("vehicleType", { required: "Select a vehicle type" })}
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white focus:outline-none"
              >
                <option value="">🚚 Select Vehicle Type</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
                <option value="Motorbike">Motorbike</option>
                <option value="Tuk Tuk">Tuk Tuk</option>
              </select>
              {errors.vehicleType && (
                <p className="text-red-600 text-sm mt-1">{errors.vehicleType.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md w-full transition"
            >
              Submit Pickup Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
