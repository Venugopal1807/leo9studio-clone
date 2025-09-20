import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 p-6 overflow-y-auto"
    >
      <button className="text-xl mb-6" onClick={onClose}>✕</button>
      <nav className="flex flex-col space-y-4 text-lg">
        <a href="#work" onClick={onClose}>Work</a>
        <details>
          <summary className="cursor-pointer">Services</summary>
          <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-md mt-2">
            <a className="py-2 px-4" href="#design">Design</a>
            <a className="py-2 px-4" href="#technology">Technology</a>
            <a className="py-2 px-4" href="#marketing">Marketing</a>
          </div>
        </details>
        <a href="#clients" onClick={onClose}>Clients</a>
        <details>
          <summary className="cursor-pointer">About</summary>
          <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-md mt-2">
            <a className="py-2 px-4" href="#about-us">About Us</a>
            <a className="py-2 px-4" href="#team">Team</a>
            <a className="py-2 px-4" href="#career">Career</a>
          </div>
        </details>
        <a href="#knowledge" onClick={onClose}>Knowledge</a>
      </nav>
    </motion.div>
  );
}
