// src/Components/Footer.jsx

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

   const handleSubscribe  = (e) => {
    e.preventDefault();
    toast.success("You’ve subscribed to our newsletter!", {
      position: "top-right",
      autoClose: 3000,
    });
    setEmail("");
  };

  return (
    <footer className="bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-repeat bg-gray-900 text-white pt-16 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Logo and Description */}
        <motion.div variants={footerVariants} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl font-bold mb-3 text-green-500">RecyConnect</h2>
          <p className="text-gray-400 mb-4">
            Empowering communities to take action in waste reporting and recycling.
          </p>
          <div className="flex gap-3">
            <Facebook className="hover:text-green-500 cursor-pointer" />
            <Twitter className="hover:text-green-500 cursor-pointer" />
            <Instagram className="hover:text-green-500 cursor-pointer" />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={footerVariants} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-3 text-green-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "About",
              "How It Works",
              "FAQs",
              "Contact",
            ].map((link) => (
              <li key={link} className="flex items-center gap-2 hover:text-green-400">
                <ArrowRight size={16} />
                <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`}>{link}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={footerVariants} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-3 text-green-500">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2 hover:text-green-400">
              <ArrowRight size={16} /> <a href="/tips">Recycling Tips</a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400">
              <ArrowRight size={16} /> <a href="/guidelines">Guidelines</a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400">
              <ArrowRight size={16} /> <a href="/blog">Blog</a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={footerVariants} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-3 text-green-500">Contact</h3>
          <ul className="text-gray-300 space-y-2">
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
        <motion.div variants={footerVariants} custom={4} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-3 text-green-500">Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with recycling tips and updates.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white rounded-md py-2"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Sub-Footer Divider */}
      <hr className="my-10 border-gray-700" />

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 pb-6">
        &copy; {new Date().getFullYear()} RecyConnect. All rights reserved.
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </footer>
  );
}
