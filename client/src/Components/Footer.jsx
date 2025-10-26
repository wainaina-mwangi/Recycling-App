import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("You’ve subscribed to our newsletter!", {
      position: "top-right",
      autoClose: 3000,
    });
    setEmail("");
  };

  return (
    <footer className="relative text-white pt-16 px-6 bg-gray-900 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 via-green-500/10 to-green-600/20 opacity-30 pointer-events-none animate-pulse"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Brand Info */}
        <motion.div
          variants={footerVariants}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-sm mb-3 text-green-400">
            RecyConnect
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Empowering communities to take action in waste reporting and
            recycling.
          </p>
          <div className="flex gap-3">
            <Facebook className="hover:text-green-400 transition" />
            <Twitter className="hover:text-green-400 transition" />
            <Instagram className="hover:text-green-400 transition" />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={footerVariants}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-sm mb-3 text-green-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["About", "How It Works", "FAQs", "Contact"].map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <ArrowRight size={16} />
                <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          variants={footerVariants}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-sm mb-3 text-green-400">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 hover:text-green-300 transition">
              <ArrowRight size={16} /> <a href="https://www.earthday.org/7-tips-to-recycle-better/" target="_blank">Recycling Tips</a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-300 transition">
              <ArrowRight size={16} /> <a href="https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables" target="_blank">Guidelines</a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-300 transition">
              <ArrowRight size={16} /> <a href="https://recyclenation.com/blog/" target="_blank">Blog</a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={footerVariants}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg   text-sm mb-3 text-green-400">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Nairobi, Kenya
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +254 712 345 678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@recyconnect.org
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          variants={footerVariants}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-sm mb-3 text-green-400">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4 text-sm">
            Stay updated with recycling tips and updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 transition text-white rounded-md py-2 font-medium shadow-md"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-700 relative z-10" />

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 pb-6 relative z-10">
        &copy; {new Date().getFullYear()} RecyConnect. All rights reserved.
      </div>

      <ToastContainer />
    </footer>
  );
}
