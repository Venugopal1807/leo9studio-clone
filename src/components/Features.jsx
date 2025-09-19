import React from "react";

export default function Features() {
  return (
    <section
      id="services"
      className="container mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
        We are a global creative agency
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-pink-100 dark:bg-pink-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            Strategy
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            We plan and design world-class digital experiences.
          </p>
        </div>
        <div className="p-6 bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            Design
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Pixel-perfect, user-first design approach.
          </p>
        </div>
        <div className="p-6 bg-purple-100 dark:bg-purple-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Robust, scalable solutions with cutting-edge tech.
          </p>
        </div>
      </div>
    </section>
  );
}
