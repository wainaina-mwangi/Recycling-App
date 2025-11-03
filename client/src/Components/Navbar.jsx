import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BaggageClaim, SunIcon, MoonIcon } from "lucide-react";
import { NavbarMenu } from "../mockData/data";
import { Link, NavLink, useLocation } from "react-router-dom"; // <-- Added NavLink, useLocation

const DesktopNavLink = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.link;

  
  return (
    <NavLink
      to={item.link}
      className={`
        relative text-base font-medium py-1 transition-colors duration-300
        // Text Color based on Active State
        ${isActive
          ? "text-green-600 dark:text-green-500" // Active text color
          : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500" // Inactive text color
        }
        group
      `}
    >
      {item.title}
      
      {/* Dynamic Underline (The Smooth Line Effect) */}
      <span className={`
        absolute bottom-0 left-1/2 h-0.5 transform -translate-x-1/2 rounded-full transition-all duration-300 ease-out
        
        // Hover Effect: Appears on hover
        group-hover:w-full group-hover:bg-green-600 dark:group-hover:bg-green-500
        
        // Active State: Always visible when active
        ${isActive 
            ? "w-full bg-green-600 dark:bg-green-500" 
            : "w-0 bg-transparent"
        }
      `}></span>
    </NavLink>
  );
};


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50"> 
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-2xl font-bold uppercase text-green-700 hover:scale-[1.03] transition-transform"
        >
          <BaggageClaim className="w-6 h-6 text-green-700" />
          <p className="text-black dark:text-white">Recy</p>
          <p className="text-green-700">Connect</p>
        </Link>

        {/* Desktop Nav - Using the new component */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <DesktopNavLink item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons + Dark Mode */}
        <div className="hidden md:flex items-center gap-2">
          {/* Dark Mode Toggle remains here */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon size={20} className="text-yellow-400" /> : <MoonIcon size={20} />}
          </button>

          <Link
            to="/login"
            className="px-4 py-2 rounded-full border border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white transition font-medium text-sm"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-medium text-sm"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle and Dark Mode button (for mobile only) */}
        <div className="flex items-center md:hidden gap-2">
           <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon size={20} className="text-yellow-400" /> : <MoonIcon size={20} />}
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation (Updated to use NavLink for active state) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-inner px-4 pb-4"
          >
            <ul className="flex flex-col gap-2 pt-2 text-gray-700 dark:text-gray-200 font-medium">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <NavLink // <-- Use NavLink for active state
                    to={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    // Tailwind's active utility: Use [aria-current='page'] to style active NavLink
                    className={({ isActive }) => `
                      block py-2 px-3 rounded transition text-left
                      ${isActive 
                        ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white" 
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }
                    `}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <hr className="border-gray-300 dark:border-gray-600 my-2" />
              {/* Auth Links for Mobile */}
              <li className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded text-center border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded bg-green-600 text-white text-center hover:bg-green-700 transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}