import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from 'lucide-react';
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

    // Hide the message after 5 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://ik.imagekit.io/tba7zelzb/4.jpg?updatedAt=1752762529953"
              alt="Contact"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </motion.div>

          {/* Form Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-white">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white"
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white"
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white flex gap-2 px-6 py-2 rounded-md hover:bg-green-500"
              >
                Send Message <Send />
              </button>

              {messageSent && (
                <p className="text-sm text-green-600 mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
