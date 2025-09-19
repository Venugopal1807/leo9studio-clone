import React, { useEffect, useRef } from "react";
import paper from "paper";

const LionParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    paper.setup(canvasRef.current);

    paper.project.importSVG("/ui clone/Public/one.svg", (svg) => {
      svg.fitBounds(paper.view.bounds.scale(0.5));
      svg.strokeColor = "black";
      svg.strokeWidth = 2;
      svg.fillColor = null;

      let outline = null;
      svg.children.forEach((child) => {
        if (child instanceof paper.Path) outline = child;
      });
      if (!outline) return;

      const length = outline.length;
      const numDots = 40;
      const points = [];

      for (let i = 0; i <= numDots; i++) {
        const offset = (i / numDots) * length;
        const point = outline.getPointAt(offset);
        points.push(point);
      }

      outline.remove();

      points.forEach((p) => {
        new paper.Path.Circle({
          center: p,
          radius: 5,
          fillColor: "orange",
        });
      });

      const path = new paper.Path({
        strokeColor: "black",
        strokeWidth: 3,
      });

      let i = 0;
      paper.view.onFrame = () => {
        if (i < points.length) {
          path.add(points[i]);
          i++;
        }
      };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      resize="true"
      style={{
        width: "400px",
        height: "400px",
        background: "transparent", // ✅ No white background
        border: "none",            // ✅ No border box
        position: "absolute",      // ✅ Overlays instead of pushing layout
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",     // ✅ Prevents blocking clicks
      }}
    />
  );
};

export default LionParticles;
