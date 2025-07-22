import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import Sponsors from "./Components/Sponsors";
import FAQs from "./Components/FAQs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Community from "./pages/Community";
import Recyclers from "./Components/Recyclers";
import AIPanel from "./Components/AIPanel";
import AIToggleButton from "./Components/AIToggleButton";
import Pick from "./pages/Pick";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./pages/Homepage";
import Join from "./pages/Join";
import Dashboard from "./pages/Dashboard/DashboardHome"
import ProtectedRoute from './Components/ProtectedRoute';
import DashboardLayout from './pages/Dashboard/DashboardHome';

// ✨ Wrapper for using `useLocation` outside <Router>
const LayoutWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-hidden">
      {!isAuthRoute && <Navbar />}
      <AIPanel/>
      <AIToggleButton/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pickup" element={<Pick />} />
        <Route path="/join" element={<Join />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/recyclers" element={<Recyclers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAuthRoute && <Footer />}
    </div>
  );
};

// Final App Component
export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
