import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What are your areas of focus as a leading UI/UX design company in India?",
    a: "We specialize in user research, interaction design, usability testing, and digital product strategy. From mobile to enterprise platforms.",
  },
  {
    q: "What separates Leo9 Design from other top UI/UX design agencies?",
    a: "We combine human neuroscience, psychology, technology, and design thinking to develop intuitive, high-performing experiences.",
  },
  {
    q: "Does Leo9 Design work with startups in UX/UI design?",
    a: "Yes, we help startups and enterprises craft impactful digital solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        FAQ's
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((item, i) => (
          <div key={i} className="border-b border-gray-300 dark:border-gray-700 py-4">
            <button
              className="w-full flex justify-between items-center text-left text-gray-900 dark:text-white"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium">{item.q}</span>
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 dark:text-gray-300 mt-2"
              >
                {item.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
