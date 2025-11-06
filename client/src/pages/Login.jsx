import React, { useState } from "react";
import { loginUser, loginWithGoogle } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("✅ Logged in successfully!");
      setTimeout(() => navigate("/Dashboard"), 1500);
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("✅ Logged in with Google!");
      setTimeout(() => navigate("/Dashboard"), 1500);
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    // Updated main container for the two-column layout
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
      
      {/* Back to Home button (placed within the login side) */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-green-700 hover:text-green-900 transition flex items-center gap-2 z-10"
      >
        <ArrowLeft size={24} />
        <span className="hidden sm:inline font-medium">Back</span>
      </button>

      {/* 🟢 SECTION 1: LOGIN FORM (Left Side) 🟢 */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md bg-white rounded-2xl p-4 sm:p-8">
          
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Log in to continue your eco journey 🌱
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      
      {/* 🖼️ SECTION 2: IMAGE/BANNER (Right Side) 🖼️ */}
      <div className="hidden md:flex items-center justify-center p-4 bg-gradient-to-br from-green-300 to-green-500">
        <div className="text-white text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Your Eco Dashboard Awaits</h1>
          <p className="text-lg mb-6">Track your progress and make a difference today!</p>
          <img 
            src="https://ik.imagekit.io/tba7zelzb/5.jpg?updatedAt=1762504600706" 
            alt="Nature and Eco-friendly concept" 
            className="w-full h-auto max-h-[70vh] object-cover rounded-xl shadow-2xl"
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