import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setMessageSent(true);
    reset();
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative min-h-screen flex items-center overflow-hidden bg-emerald-950"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature Background"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* CONTENT & MAP SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Let’s protect our <br />
              <span className="text-emerald-500">environment</span> together.
            </h2>

            {/* map */}
            <div className="relative pt-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.979021628667!2d36.86156054656861!3d-1.247676663719151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f143332740441%3A0x5bf4fa9b22608278!2sRuaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1762394239816!5m2!1sen!2ske" 
                width="100%" height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

  {/* form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-emerald-900 uppercase">Your Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 bg-emerald-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all text-emerald-900 placeholder:text-emerald-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-emerald-900 uppercase">Email Address</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="name@recyconnect.com"
                  className="w-full px-5 py-4 bg-emerald-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all text-emerald-900 placeholder:text-emerald-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-emerald-900 uppercase">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 bg-emerald-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl outline-none transition-all text-emerald-900 resize-none placeholder:text-emerald-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                SEND MESSAGE <Send size={20} />
              </button>

              <AnimatePresence>
                {messageSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex items-center justify-center gap-2 text-emerald-600 font-bold"
                  >
                    <CheckCircle size={18} /> Message received!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}