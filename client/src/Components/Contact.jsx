import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setMessageSent(true);
    reset();

    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Side (Replaces Image Side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Find Our Location
            </h3>
            <div className="relative pt-[56.25%] rounded-3xl overflow-hidden shadow-xl">
              {/* Google Maps Iframe Embed 
                NOTE: Replace the 'src' URL with the embed link for your specific location.
                This example is set to show Nairobi, Kenya.
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.979021628667!2d36.86156054656861!3d-1.247676663719151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f143332740441%3A0x5bf4fa9b22608278!2sRuaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1762394239816!5m2!1sen!2ske" 
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
          </motion.div>

          {/* Form Side (No changes) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Let's Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have questions or feedback? Reach out and we'll get back to you as soon as we can.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Button & Feedback */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
                >
                  Send Message <Send size={18} />
                </button>

                {messageSent && (
                  <motion.p
                    className="text-green-600 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}