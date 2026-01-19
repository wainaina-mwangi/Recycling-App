import {
  Mail, MapPin, Phone, ArrowRight, Facebook, Twitter, Instagram, Leaf
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Welcome to the green movement!", {
      position: "bottom-center",
      autoClose: 3000,
      theme: "dark"
    });
    setEmail("");
  };

  return (
    <footer className="relative bg-[#0a1a12] pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <Leaf className="absolute -bottom-10 -left-10 w-64 h-64 text-emerald-900/10 rotate-12" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Newsletter Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-emerald-600 rounded-[3rem] p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-900/20"
        >
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-3xl font-black text-white mb-2">Join the Green List</h3>
            <p className="text-emerald-50 opacity-90">Get weekly tips on zero-waste living and platform updates.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-80 backdrop-blur-md"
              required
            />
            <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">RecyConnect</span>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm">
              Kenya's leading platform for circular economy. We make recycling as simple as a single tap.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-emerald-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              {["About Us", "How It Works", "Partner with Us", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 group-hover:bg-emerald-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-emerald-400">Recycling Guidelines</a></li>
              <li><a href="#" className="hover:text-emerald-400">Impact Reports</a></li>
              <li><a href="#" className="hover:text-emerald-400">Community Stories</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>Nairobi, Kenya<br />Green Space Plaza, 4th Floor</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Phone className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Mail className="text-emerald-500 w-5 h-5 shrink-0" />
                <span>hello@recyconnect.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} RecyConnect. Built for a sustainable Kenya.
          </p>
          <div className="flex gap-8 text-xs text-stone-500 font-medium">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </footer>
  );
}