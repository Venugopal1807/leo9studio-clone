import React, { useState, useEffect } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20 relative">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Leo9 Studio. All rights reserved.</p>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
