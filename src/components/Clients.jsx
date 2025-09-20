import React from "react";

export default function Clients({ duration = 20 }) {
  const clientNames = ["FAB", "KPIT", "TATA", "BMW", "SONY", "HUGGIES", "ETON", "Star", "P&G"];
  const items = [...clientNames, ...clientNames];

  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-6">
        {/* Text */}
        <div className="flex-shrink-0 text-sm font-semibold text-gray-900 dark:text-white">
          Your trusted agency
        </div>

        {/* Line */}
        <div className="w-0.5 h-6 bg-gray-500 dark:bg-gray-300"></div>

        {/* Marquee */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="whitespace-nowrap marquee-smooth"
            style={{
              display: "inline-block",
              animation: `marquee ${duration}s linear infinite`,
            }}
          >
            {items.map((c, i) => (
              <span
                key={i}
                className="inline-block mx-8 text-base font-medium text-black dark:text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
