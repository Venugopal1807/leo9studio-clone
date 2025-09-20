import React, { useEffect, useState } from "react";
import NavLogo from "../assets/Navlogo.418ad90c948b7f630360b2efaf07a6d6.svg";

export default function Navbar({ onOpenMenu }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black dark:bg-gray-900 dark:text-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <img
              src={NavLogo}
              alt="leo9 logo"
              className={`h-8 w-auto transition-all duration-300 ${
                dark ? "invert brightness-0" : ""
              }`}
            />
          </div>

          {/* CENTER: Nav Links */}
          <nav className="hidden md:flex justify-center space-x-8 font-medium text-sm">
            <a href="#work" className="hover:text-pink-500">Work</a>

            {/* Dropdown for Services */}
            <div className="relative group">
              <button className="hover:text-pink-500">Services</button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 mt-2 rounded-md shadow-lg w-44">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#design">Design</a>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#technology">Technology</a>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#marketing">Marketing</a>
              </div>
            </div>

            <a href="#clients" className="hover:text-pink-500">Clients</a>

            {/* Dropdown for About */}
            <div className="relative group">
              <button className="hover:text-pink-500">About</button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 mt-2 rounded-md shadow-lg w-44">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#about-us">About Us</a>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#team">Team</a>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" href="#career">Career</a>
              </div>
            </div>

            <a href="#knowledge" className="hover:text-pink-500">Knowledge</a>
          </nav>

          {/* RIGHT: Buttons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark((s) => !s)}
              aria-label="Toggle theme"
              className="p-2 rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="h-5 w-5 text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-gray-700">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-4 py-2 bg-black dark:bg-white dark:text-black text-white rounded-md text-sm font-medium hover:opacity-90"
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={onOpenMenu} aria-label="Open menu">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
