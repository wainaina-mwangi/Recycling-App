import { useState, useEffect } from "react";
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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md relative z-50" id="Nav">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="flex items-center gap-1 text-2xl font-bold uppercase text-green-700">
          <BaggageClaim className="w-6 h-6" />
          <p className="text-black">Recy</p>
          <p className="text-green-700">Connect</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-4 text-gray-600">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="inline-block px-3 py-1 font-semibold hover:text-green-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
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
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-2 rounded hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <hr />
            <li>
              <Link
                to="/login"
                className="block py-2 px-2 rounded text-center bg-orange-500 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block py-2 px-2 rounded bg-green-600 text-white text-center hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
