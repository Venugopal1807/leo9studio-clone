import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20 relative">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Leo9 Studio. All rights reserved.</p>
      </div>

      {/* Animated Scroll-to-top Button */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600"
        >
          ⬆
        </motion.button>
      )}
    </footer>
  );
}
