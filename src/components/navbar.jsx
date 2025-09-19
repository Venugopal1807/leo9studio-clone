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

  // Smooth scroll helper
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black dark:bg-gray-900 dark:text-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 items-center h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <img src={NavLogo} alt="leo9 logo" className="h-8 w-auto" />
            {/* <span className="font-bold text-lg hidden sm:inline">leo9</span> */}
          </div>

          {/* CENTER: Links */}
          <nav className="hidden md:flex justify-center space-x-8 font-medium text-sm">
            <a href="#work" onClick={(e) => scrollToSection(e, "#work")} className="hover:text-pink-500">
              Work
            </a>
            <div className="relative group">
              <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-pink-500">
                Services
              </a>
              <div className="absolute hidden group-hover:flex flex-col mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <a href="#design" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Design</a>
                <a href="#technology" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Technology</a>
                <a href="#marketing" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Marketing</a>
              </div>
            </div>
            <a href="#clients" onClick={(e) => scrollToSection(e, "#clients")} className="hover:text-pink-500">
              Clients
            </a>
            <div className="relative group">
              <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-pink-500">
                About
              </a>
              <div className="absolute hidden group-hover:flex flex-col mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <a href="#about-us" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</a>
                <a href="#team" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Team</a>
                <a href="#career" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Career</a>
              </div>
            </div>
            <a href="#knowledge" onClick={(e) => scrollToSection(e, "#knowledge")} className="hover:text-pink-500">
              Knowledge
            </a>
          </nav>

          {/* RIGHT: Theme toggle & Contact */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => setDark((s) => !s)}
              aria-label="Toggle theme"
              className="p-2 rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.5a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM15.57 4.43a.75.75 0 011.06 1.06l-.88.88a.75.75 0 11-1.06-1.06l.88-.88zM3.5 10a.75.75 0 01.75-.75h1.25a.75.75 0 010 1.5H4.25A.75.75 0 013.5 10zM10 15.25a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0v-1.25c0-.414.336-.75.75-.75zM4.43 4.43a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 0017.293 13.293z" />
                </svg>
              )}
            </button>

            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:opacity-95">
              Contact
            </a>

            <button className="md:hidden p-2 ml-1" onClick={onOpenMenu} aria-label="Open menu">
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
