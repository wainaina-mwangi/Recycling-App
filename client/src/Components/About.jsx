import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 md:px-10 mt-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-3xl shadow-lg border border-green-200 dark:border-green-600">
            <img
              src="https://ik.imagekit.io/tba7zelzb/about.jpeg.png?updatedAt=1752762540645"
              alt="About RecyConnect"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Empowering Waste Responsibility
          </h2>

          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white text-sm uppercase tracking-wide">
            Welcome to RecyConnect
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            <strong>RecyConnect</strong> is a sustainability-focused platform that empowers users
            to report litter, request eco-friendly waste pickups, and easily connect with certified recyclers in their area.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We bridge the gap between communities and green initiatives, making it easier than ever
            to contribute to cleaner, safer, and more responsible environments.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            💚 Proudly contributing to <span className="text-green-600 dark:text-green-400 font-medium">SDG 12:</span>{" "}
            Responsible Consumption & Production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
