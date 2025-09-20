import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    onClose();
    const section = document.querySelector(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150); 
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 p-6 text-gray-900 dark:text-white"
    >
      <button className="text-xl mb-6" onClick={onClose}>✕</button>
      <nav className="flex flex-col space-y-4 text-lg">
        <a href="#work" onClick={(e) => scrollToSection(e, "#work")}>Work</a>
        <a href="#services" onClick={(e) => scrollToSection(e, "#services")}>Services</a>
        <a href="#clients" onClick={(e) => scrollToSection(e, "#clients")}>Clients</a>
        <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>About</a>
        <a href="#knowledge" onClick={(e) => scrollToSection(e, "#knowledge")}>Knowledge</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contact</a>
      </nav>
    </motion.div>
  );
}
