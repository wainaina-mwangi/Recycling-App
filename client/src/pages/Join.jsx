import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, UserPlus, Phone, ArrowLeft, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Logic for form submission
    console.log("Form Data:", data);
    toast.success("Welcome to the Movement! 🌍", {
      theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
      icon: "🌱"
    });
    reset();
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-20 px-6 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/community"
              className="inline-flex items-center text-emerald-600 font-bold mb-8 group"
            >
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft size={18} />
              </div>
              Back to Community
            </Link>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-none mb-6">
              Start Your <br />
              <span className="text-emerald-500">Eco-Legacy.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-8">
              Join 15,000+ Kenyans who are transforming their neighborhoods through smart recycling.
            </p>

            <div className="space-y-4">
              {[
                { icon: <ShieldCheck className="text-emerald-500"/>, text: "Verified Recycler Network" },
                { icon: <Sparkles className="text-emerald-500"/>, text: "Exclusive Community Events" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-gray-700 dark:text-gray-200">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Glass Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400 ml-1">Full Name</label>
                <div className="relative">
                  <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="e.g. Mwangi Juma"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 outline-none transition-all dark:text-white font-medium"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                    })}
                    placeholder="mwangi@example.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 outline-none transition-all dark:text-white font-medium"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400 ml-1">Phone Number (Optional)</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    {...register("phone")}
                    placeholder="+254 7..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 outline-none transition-all dark:text-white font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                {isSubmitSuccessful ? (
                  <>SUCCESS <CheckCircle2 size={20} /></>
                ) : (
                  <>JOIN THE MOVEMENT <Sparkles size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="Top-right" />
    </section>
  );
}