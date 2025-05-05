import React, { useMemo } from 'react';
import './index.css';

const Snowflakes = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 10,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5
    }));
  }, []);

  return (
    <div className="snowflake-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;