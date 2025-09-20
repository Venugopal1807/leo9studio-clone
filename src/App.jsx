import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import Clients from "./components/Clients.jsx";
import Features from "./components/Features.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // CTA handler 
  const handleCTAClick = () => {
    alert("CTA clicked — replace with modal or form");
  };

  return (
    <div className="font-sans text-slate-800 antialiased">
      {/* Navbar + Mobile Menu */}
      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main sections */}
      <main>
        <Hero onCTAClick={handleCTAClick} />
        <Clients  duration={25} />
        <Features />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
