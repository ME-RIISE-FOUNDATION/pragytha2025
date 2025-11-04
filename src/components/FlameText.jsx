import React from "react";

const FlameText = () => {
  const embers = Array.from({ length: 25 });

  return (
    <div className="relative inline-block">
      <h1 className="font-semibold text-4xl md:text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-t from-orange-700 via-yellow-400 to-white animate-fire relative z-10">
        PRAGYATHA '25
      </h1>

      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {embers.map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const delay = Math.random() * 4;
          const duration = 2 + Math.random() * 3;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-orange-400 opacity-70 animate-rise blur-[1px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default FlameText;