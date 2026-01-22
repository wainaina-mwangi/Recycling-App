import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 1. Import ThemeProvider and the custom hook
import { ThemeProvider, useTheme } from "./Components/ThemeContext";

import Navbar from "./Components/Navbar";
// ... other imports ...
import Loader from "./Components/Loader";
import Homepage from "./pages/Homepage";
import About from "./Components/About";
import Pick from "./pages/Pick";
import Join from "./pages/Join";
import FAQs from "./Components/Faqs";
import Contact from "./Components/Contact";
import Community from "./pages/Community";
import Recyclers from "./Components/Recyclers";
import Sponsors from "./Components/Sponsors";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from './Components/ProtectedRoute';
import DashboardLayout from './pages/Dashboard/DashboardHome';
import AIPanel from "./Components/AIPanel";
import Footer from "./Components/Footer";

const LayoutWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // 2. Access the theme state
  const { isDarkMode } = useTheme();

  const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <div className="overflow-x-hidden">
        {!isAuthRoute && <Navbar />}
        <AIPanel />

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
    </div>
  );
};

export default function App() {
  return (
    // 4. Wrap everything in the Provider
    <ThemeProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </ThemeProvider>
  );
}