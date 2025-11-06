import React, { useState } from "react";
import { registerUser, loginWithGoogle } from "../services/authService";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      toast.success("🎉 Registered successfully! Redirecting...");
      // The onAuthStateChanged listener will handle the actual navigation
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      toast.success("🎉 Registered with Google! Redirecting...");
      // The onAuthStateChanged listener will handle the actual navigation
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white relative">

      {/* Back to Home button (visible on both sides) */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-600 hover:text-green-700 transition flex items-center gap-2 z-10 font-medium"
      >
        <ArrowLeft size={24} />
        <span className="hidden sm:inline">Home</span>
      </button>

      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-lg bg-white p-4">
          
          <h2 className="text-4xl font-extrabold text-green-700 text-center mb-2">
            Create Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Enhanced styling for inputs
              className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-400 focus:outline-none transition duration-300"
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // Enhanced styling for inputs
              className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-400 focus:outline-none transition duration-300"
              required
            />
            <button
              type="submit"
              // Enhanced styling for the main button
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-[1.01]"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 font-semibold text-sm tracking-wider">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleRegister}
            className="w-full bg-white border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-green-50 transition duration-300 shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-7 h-7"
            />
            <span className="text-gray-700 font-semibold text-md">
              Sign up with Google
            </span>
          </button>

          {/* Footer */}
          <p className="text-md text-gray-500 text-center mt-8">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-600 font-bold hover:text-green-700 hover:underline transition duration-300"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>

      
      <div className="hidden h-full lg:flex items-center justify-center p-4 bg-gradient-to-tl from-green-500 to-green-300">
        <div className="text-white text-center p-8">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Build a <span className="text-green-900">Greener</span> Future
          </h1>
          <p className="text-xl font-light mb-8 opacity-90">
            Track your impact, save the planet, one step at a time.
          </p>
          <img 
            src="https://ik.imagekit.io/tba7zelzb/hero2.jpeg.jpg?updatedAt=1752762531878" 
            alt="Beautiful green landscape and clean energy" 
            className="w-full h-auto max-h-[80vh] object-cover rounded-3xl shadow-2xl border-4 border-white border-opacity-30"
          />
        </div>
      </div>

      {/* Toasts */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}