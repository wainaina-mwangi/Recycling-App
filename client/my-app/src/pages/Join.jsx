
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, UserPlus, Phone , ArrowLeft } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("🎉 Welcome to the RecyConnect Community!", {
      position: "top-right",
      autoClose: 3000,
    });
    reset();
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 mt-12 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-600 mb-6"
        >
          Join the RecyConnect Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Become a part of our growing network of eco-conscious citizens, recyclers, and change-makers.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">
              Full Name
            </label>
            <div className="relative">
              <UserPlus className="absolute left-3 top-2.5 text-gray-400" />
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="example@domain.com"
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">
              Phone Number (optional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 text-gray-400" />
              <input
                {...register("phone")}
                type="tel"
                placeholder="+254 712 345 678"
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-md transition"
          >
            Join Now
          </button>
        </motion.form>

           {/* Return to Community Button */}
        <div className="mt-6 text-center">
          <Link
            to="/community"
            className="inline-flex items-center text-green-600 hover:text-green-500 transition font-medium"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Community Page
          </Link>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
}
