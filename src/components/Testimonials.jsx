import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ryan Denman",
    role: "Co-Founder - Homsby",
    text: "They delivered exactly what we were looking for. LEO9 was one of the few one-stop shops that could deliver the results we were expecting.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "CEO - DesignHub",
    text: "Working with this team was an amazing experience. The design process was seamless, and the results exceeded expectations!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        What Clients Say
      </h2>
      <div className="max-w-xl mx-auto relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
          >
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              {testimonials[index].role}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{testimonials[index].text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
