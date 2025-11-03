
import { Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register'); 
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full max-w-sm mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-white/20"
      variants={formVariants}
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Join the Movement</h3>
      <p className="text-gray-200 mb-6 text-center text-sm">Sign up now to start cleaning up your community.</p>
      <form onSubmit={handleSubmit} className="space-y-4"> 
        {/* Full Name Input */}
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:ring-green-500 focus:border-green-500 transition border-none"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-800 rounded-lg focus:ring-green-500 focus:border-green-500 transition border-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit" 
          className="w-full mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
        >
          Get Started Now
        </button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;