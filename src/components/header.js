import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = saved === "dark" || (!saved && prefersDark);
    document.documentElement.classList.toggle("dark", isDarkMode);
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const nowDark = html.classList.contains("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  return (
    <nav
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-md py-6 px-4"
    >
      <div className="flex justify-between items-center md:flex-row gap-12 mx-auto md:pl-36 ">
        <Link to="/" className="block">
          <StaticImage
          src="../images/Logo LV.png"
          alt="Liliya Dev Logo"
          className="max-w-[200px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-base font-medium pr-24">
           <button
        className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition"
        onClick={() => {
          if (window.netlifyIdentity) {
            window.netlifyIdentity.open()
          } else {
            console.warn("Netlify Identity not loaded")
          }
        }}
      >
        Login
      </button>

          {/* 🌙 Dark Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="px-3 py-2 dark:text-gray-100 rounded flex items-center space-x-2"
          >
            {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
            className="hidden md:flex space-x-6 items-center"
          >
            <Link to="/" className="text-slate-100 text-lg font-medium no-underline hover:text-indigo-200 hover:scale-105 hover:drop-shadow-md transition duration-200">Home</Link>
            <Link to="/page-2" className="text-slate-100 text-lg font-medium no-underline transition duration-200 hover:text-indigo-200 hover:scale-105 hover:drop-shadow-md">Page 2</Link>
            <a href="#projects" className="text-slate-100 text-lg font-medium no-underline transition duration-200 hover:text-indigo-200 hover:scale-105 hover:drop-shadow-md">Projects</a>
            <a href="#contact" className="text-slate-100 text-lg font-medium no-underline transition duration-200 hover:text-indigo-200 hover:scale-105 hover:drop-shadow-md">Contact</a>

            {/* 🌙 Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center space-x-2"
            >
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              <span>Toggle</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Header
