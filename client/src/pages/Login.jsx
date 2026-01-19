import React, { useState } from "react";
import { loginUser, loginWithGoogle } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, Mail, Lock, LogIn, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginUser(email, password);
      toast.success("Welcome back, Eco-Warrior! 🌱");
      setTimeout(() => navigate("/Dashboard"), 1500);
    } catch (err) {
      toast.error(`Access Denied: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google Authentication Successful!");
      setTimeout(() => navigate("/Dashboard"), 1500);
    } catch (err) {
      toast.error(`Google Login Failed: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-950 transition-colors duration-500">
      
      {/* --- LEFT SIDE: THE FORM --- */}
      <div className="flex items-center justify-center p-8 lg:p-16 relative">
        {/* Floating Back Button */}
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 text-emerald-600 dark:text-emerald-500 flex items-center gap-2 font-black text-sm uppercase tracking-tighter"
        >
          <ArrowLeft size={20} strokeWidth={3} />
          Back to Home
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3">
              Welcome <span className="text-emerald-500">Back.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Continue your journey toward a zero-waste Kenya.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-emerald-800 dark:text-emerald-500 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase text-emerald-800 dark:text-emerald-500 ml-1">Password</label>
                <a href="#" className="text-xs font-bold text-gray-400 hover:text-emerald-600 transition">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all dark:text-white"
                  required
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <LogIn size={20} />}
              {isLoading ? "AUTHENTICATING..." : "SIGN IN"}
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
            <span className="text-xs font-black text-gray-400 uppercase">Secure Login</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 py-4 rounded-2xl flex items-center justify-center gap-3 hover:border-emerald-500 transition-all group"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            />
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Continue with Google
            </span>
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-10 font-medium">
            New to the movement?{" "}
            <a href="/register" className="text-emerald-600 font-black hover:underline underline-offset-4">
              Create an Account
            </a>
          </p>
        </motion.div>
      </div>
      
      {/* --- RIGHT SIDE: CINEMATIC BANNER --- */}
      <div className="hidden md:flex relative items-center justify-center bg-emerald-950 overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
        </div>

        <div className="relative z-10 text-white p-12 max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-20 h-1 bg-emerald-500 mb-6"></div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Small actions, <br />
              <span className="text-emerald-400">Massive impact.</span>
            </h1>
            <p className="text-emerald-100/70 text-lg mb-8 font-medium">
              Join thousands of people tracking their recycling footprints and earning rewards for a cleaner planet.
            </p>
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-900 bg-emerald-500 flex items-center justify-center font-bold text-xs">
                      U{i}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-emerald-200">+1.2k active today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </div>
  );
}