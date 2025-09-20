import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const LionAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="lionParticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 200, density: { enable: true, area: 800 } },
          size: { value: 2 },
          color: { value: "#fff" },
          links: {
            enable: true,
            distance: 50,
            color: "#fff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1 },
        },
        polygon: {
          enable: true,
          type: "inline",
          move: { radius: 5 },
          url: "/ui clone/Public/one.svg", 
          draw: { enable: true, stroke: { color: "rgba(255,255,255,0.2)" } },
        },
      }}
    />
  );
};

export default LionAnimation;
