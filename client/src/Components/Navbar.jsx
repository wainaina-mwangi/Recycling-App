import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BaggageClaim, SunIcon, MoonIcon } from "lucide-react";
import { NavbarMenu } from "../mockData/data";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useTheme } from "./ThemeContext"; 

const DesktopNavLink = ({ item, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === item.link;

  return (
    <NavLink
      to={item.link}
      className={`
        relative text-base font-medium py-1 transition-colors duration-300
        ${isScrolled 
          ? (isActive ? "text-white" : "text-emerald-50 hover:text-white") 
          : (isActive ? "text-green-600 dark:text-green-500" : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500")
        }
        group
      `}
    >
      {item.title}
      <span className={`
        absolute bottom-0 left-1/2 h-0.5 transform -translate-x-1/2 rounded-full transition-all duration-300 ease-out
        ${isScrolled ? "bg-white" : "bg-green-600 dark:bg-green-500"}
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
      `}></span>
    </NavLink>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 2. Access the global theme state and toggle function
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled 
        ? "bg-emerald-600 shadow-2xl py-3" 
        : "bg-white dark:bg-gray-900 py-5 shadow-lg"
      }
    `}> 
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-1 text-2xl font-bold uppercase transition-transform hover:scale-[1.03]
            ${scrolled ? "text-white" : "text-green-700"}
          `}
        >
          <BaggageClaim className={`w-6 h-6 ${scrolled ? "text-white" : "text-green-700"}`} />
          <p className={`${scrolled ? "text-white" : "text-black dark:text-white"}`}>Recy</p>
          <p className={`${scrolled ? "text-emerald-200" : "text-green-700"}`}>Connect</p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <DesktopNavLink item={item} isScrolled={scrolled} />
              </li>
            ))}
          </ul>
        </div>

        {/* Auth + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? "text-white hover:bg-white/20" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {/* 4. Use isDarkMode from Context to show the correct icon */}
            {isDarkMode ? (
              <SunIcon size={20} className={scrolled ? "text-white" : "text-yellow-400"} />
            ) : (
              <MoonIcon size={20} />
            )}
          </button>

          <Link
            to="/login"
            className={`px-4 py-2 rounded-full transition font-medium text-sm border
              ${scrolled 
                ? "border-white text-white hover:bg-white hover:text-emerald-600" 
                : "border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white"
              }
            `}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`px-4 py-2 rounded-full transition font-medium text-sm
              ${scrolled 
                ? "bg-white text-emerald-600 hover:bg-emerald-50" 
                : "bg-green-600 text-white hover:bg-green-700"
              }
            `}
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden gap-2">
           {/* Mobile Theme Toggle (optional, adding for convenience) */}
           <button onClick={toggleTheme} className={`p-2 ${scrolled ? "text-white" : "text-gray-800 dark:text-white"}`}>
            {isDarkMode ? <SunIcon size={20} className="text-yellow-400" /> : <MoonIcon size={20} />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${scrolled ? "text-white" : "text-gray-800 dark:text-white"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu ... (remains same) */}
    </nav>
  );
}