import React from 'react';

const BlueEmbers = () => {
  const particleCount = 150;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const horizontalDrift = Math.random() * 80 - 40;
    const style = {
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      '--horizontal-drift': `${horizontalDrift}vw`,
    };
    return <div key={i} className="particle" style={style}></div>;
  });

  const animationStyles = `
    .particle {
      position: absolute;
      bottom: -10px;
      background-color: #00ffff;
      border-radius: 50%;
      opacity: 0.8;
      box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
      animation-name: rise;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes rise {
      0% {
        transform: translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: translate(var(--horizontal-drift), -105vh);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div className="particles-container absolute inset-0 pointer-events-none z-0">
        {particles}
      </div>
    </>
  );
};

export default BlueEmbers;

