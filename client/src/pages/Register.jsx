import React, { useState } from "react";
import { registerUser, loginWithGoogle } from "../services/authService";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, UserPlus, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      toast.success("🎉 Account Created! Welcome to the mission.");
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      toast.success("🎉 Google Sign-up Successful!");
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-950 transition-colors duration-500">
      
      {/* --- FLOATING HOME BUTTON --- */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 text-emerald-600 dark:text-emerald-500 flex items-center gap-2 z-20 font-black text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={18} strokeWidth={3} />
        Home
      </motion.button>

      {/* --- LEFT SIDE: THE CONTENT --- */}
      <div className="flex items-center justify-center p-8 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-none mb-4">
              Join the <br />
              <span className="text-emerald-500 text-6xl">Movement.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Create your account to start tracking your environmental impact in Kenya.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-500 ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all dark:text-white font-medium shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-500 ml-1">Password</label>
              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all dark:text-white font-medium shadow-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
            >
              CREATE FREE ACCOUNT <UserPlus size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-gray-100 dark:bg-gray-800"></div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trust the Process</span>
            <div className="flex-1 h-[2px] bg-gray-100 dark:bg-gray-800"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleRegister}
            className="w-full bg-white dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 py-4 rounded-2xl flex items-center justify-center gap-3 hover:border-emerald-500 hover:bg-emerald-50/10 transition-all group"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Sign up with Google
            </span>
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-10 font-medium">
            Already a member?{" "}
            <Link to="/login" className="text-emerald-600 dark:text-emerald-400 font-black hover:underline underline-offset-4">
              Login here
            </Link>
          </p>
        </motion.div>
      </div>

      {/* --- RIGHT SIDE: THE VISUAL --- */}
      <div className="hidden h-full lg:flex items-center justify-center p-8 bg-emerald-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-green-500/20 blur-[80px] rounded-full" />

        <div className="relative z-10 text-white p-8 max-w-lg text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
              <Sparkles size={14} /> 100% Kenyan Initiative
            </div>
            
            <h1 className="text-6xl font-black mb-8 leading-[0.9]">
              Build a <br />
              <span className="text-emerald-400 italic font-light tracking-tighter">Greener</span> <br />
              Future.
            </h1>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl blur opacity-25"></div>
              <img 
                src="https://ik.imagekit.io/tba7zelzb/hero2.jpeg.jpg?updatedAt=1752762531878" 
                alt="Green Living" 
                className="relative w-full h-auto object-cover rounded-[2rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition duration-700 border border-white/10"
              />
            </div>

            <div className="mt-8 flex items-center justify-between px-2">
              <p className="text-emerald-100/60 font-medium text-sm">Join over 15k+ contributors</p>
              <div className="h-px w-24 bg-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer theme="dark" position="bottom-left" />
    </div>
  );
}