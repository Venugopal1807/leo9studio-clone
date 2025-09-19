import React from "react";
import { motion } from "framer-motion";
import LionParticles from "./LionParticles";
import AnimatedDots from "./AnimatedDots";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 flex flex-col md:flex-row items-center container mx-auto px-6">
      {/* Left Side: Lion Particles + Animated Dots */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center gap-8 min-h-[400px]"
      >
        <LionParticles />
        <AnimatedDots />
      </motion.div>

      {/* Right Side Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Your Trusted UI UX Design Agency.
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black dark:text-white">
          Design <br /> Transform <br /> Accelerate
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Redefining user experiences through Behavioural Science & AI
        </p>
      </motion.div>
    </section>
  );
}
