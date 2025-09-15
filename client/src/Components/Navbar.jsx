import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BaggageClaim, SunIcon, MoonIcon } from "lucide-react";
import { NavbarMenu } from "../mockData/data";
import { Link } from "react-router-dom";

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
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container  flex justify-between items-center py-6 px-2 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-2xl font-bold uppercase text-green-700 hover:scale-105 transition-transform"
        >
          <BaggageClaim className="w-6 h-6 text-green-700" />
          <p className="text-black dark:text-white">Recy</p>
          <p className="text-green-700">Connect</p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="inline-block px-3 py-1 font-semibold hover:text-green-600 hover:underline underline-offset-6 transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons + Dark Mode */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>

          <Link
            to="/login"
            className="px-4 py-1 rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition font-medium"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow px-4 py-4"
          >
            <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <hr className="border-gray-300 dark:border-gray-600" />
              <li>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-2 rounded text-center bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-2 rounded bg-green-600 text-white text-center hover:bg-green-700 transition"
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
