import React, { useState, useEffect } from "react";

const AnimatedDots = () => {
  const [connectionTimer, setConnectionTimer] = useState(0);

  // concentric radial dots
  const generateRadialDots = () => {
    const dots = [];
    dots.push({ id: "center", x: 0, y: 0, size: 6, ring: 0 });

    const rings = [
      { count: 6, radius: 25, jitter: 8 },
      { count: 10, radius: 50, jitter: 12 },
      { count: 14, radius: 75, jitter: 15 },
      { count: 18, radius: 105, jitter: 20 },
      { count: 12, radius: 135, jitter: 25 },
    ];

    rings.forEach((ring, rIndex) => {
      for (let i = 0; i < ring.count; i++) {
        if (rIndex >= 3 && Math.random() > 0.5) continue; // sparser outer rings
        const angle = (i / ring.count) * Math.PI * 2 + Math.random() * 0.3;
        const radius = ring.radius + (Math.random() - 0.5) * ring.jitter;
        dots.push({
          id: `ring${rIndex}-${i}`,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          size: 3,
          ring: rIndex + 1,
        });
      }
    });

    return dots;
  };

  const dots = generateRadialDots();

  useEffect(() => {
    const timer = setInterval(() => {
      setConnectionTimer((prev) => prev + 1);
    }, 500); // slower updates
    return () => clearInterval(timer);
  }, []);

  const generateConnections = () => {
    if (connectionTimer % 10 !== 0) return [];
    const connections = [];
    const numConnections = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < numConnections; i++) {
      const dot1 = dots[Math.floor(Math.random() * dots.length)];
      const nearbyDots = dots.filter(
        (d) => d.id !== dot1.id && Math.abs(d.ring - dot1.ring) <= 1
      );
      const dot2 =
        nearbyDots[Math.floor(Math.random() * nearbyDots.length)] ||
        dots[Math.floor(Math.random() * dots.length)];

      if (dot1 && dot2) {
        connections.push({
          id: `${dot1.id}-${dot2.id}`,
          x1: dot1.x,
          y1: dot1.y,
          x2: dot2.x,
          y2: dot2.y,
        });
      }
    }
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="-180 -180 360 360"
        className="transition-colors duration-500"
      >
        {/* Lines */}
        {connections.map((c) => (
          <line
            key={c.id}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2,4"
            opacity="0.4"
            className="text-gray-600 dark:text-white"
          />
        ))}
        {/* Dots */}
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            className="text-black dark:text-white"
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedDots;
