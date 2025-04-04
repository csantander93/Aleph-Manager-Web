import React from 'react';
import './Particles.css';

const Particles = ({ count = 8, color = 'rgba(103, 232, 249, 0.6)' }) => {
  return (
    <div className="particles-container">
      {[...Array(count)].map((_, i) => (
        <div 
          key={i}
          className="particle"
          style={{
            '--size': `${Math.random() * 6 + 4}px`,
            '--pos-x': `${Math.random() * 100}%`,
            '--pos-y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
            '--color': color
          }}
        />
      ))}
    </div>
  );
};

export default Particles;