import { useState,useEffect } from "react";
import { Menu, X, BaggageClaim, SunIcon,MoonIcon } from "lucide-react";
import { NavbarMenu } from "../mockData/data"; // assuming this is your nav items array

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-white shadow-md relative z-50" id="Nav">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">

        {/*  Logo Section */}
        <div className="flex items-center gap-1 text-2xl font-bold uppercase text-green-700">
          <BaggageClaim className="w-6 h-6" />
          <p className="text-black">Recy</p>
          <p className="text-green-700">Connect</p>
        </div>

        {/*  Center Menu for Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block px-3 py-1 font-semibold hover:text-green-600"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>

          <a
            href="/login"
            className="px-4 py-1 rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition font-medium"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition font-medium"
          >
            Register
          </a>
        </div>

        {/*  Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/*  Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-2 rounded hover:bg-gray-100"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <hr />
            <li>
              <a
                href="/login"
                className="block py-2 px-2 rounded text-center text-white bg-orange-500 text-green-700"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="block py-2 px-2 rounded bg-green-600 text-white text-center hover:bg-green-700"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
