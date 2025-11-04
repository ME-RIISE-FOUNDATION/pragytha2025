import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    const canvas = document.getElementById("snowfall");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const numFlakes = 120;
    const flakes = [];

    for (let i = 0; i < numFlakes; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.25,
        drift: Math.random() * 1 - 0.5,
        swayAngle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.6 + 0.4,
        blur: Math.random() * 2,
      });
    }

    const drawSnow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flakes.forEach((flake) => {
        ctx.beginPath();
        ctx.shadowBlur = flake.blur * 3;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.swayAngle += 0.01;
        flake.x += Math.sin(flake.swayAngle) * 0.3 + flake.drift;
        flake.y += flake.speedY;

        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(drawSnow);
    };

    drawSnow();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      id="snowfall"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default Snowfall;