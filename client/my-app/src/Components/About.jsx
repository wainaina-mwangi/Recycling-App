import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://ik.imagekit.io/tba7zelzb/about.jpeg.png?updatedAt=1752762540645"
            alt="About RecyConnect"
            className="rounded-3xl shadow-md object-cover w-full h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6 flex gap-2 justify-center md:justify-start">
            Welcome to <span className="text-green-700">RecyConnect</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            RecyConnect is a sustainability-driven platform dedicated to tackling littering and enhancing responsible waste practices.
            Users can report illegal dumping, request garbage pickup, and connect with nearby recyclers — all from one centralized platform.
          </p>
          <p className="text-gray-600 mb-2">
            Whether you're a citizen, a recycler, or a waste collector — RecyConnect connects you
            to the tools and people that make proper recycling easier and more impactful.
          </p>
          <p className="text-gray-500 mt-4">
            We're proud to contribute toward the UN Sustainable Development Goal 12: Responsible Consumption & Production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
