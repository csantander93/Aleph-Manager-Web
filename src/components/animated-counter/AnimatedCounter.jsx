import React, { useEffect, useRef } from 'react';
import './AnimatedCounter.css';

const AnimatedCounter = ({ targetValue, label, description }) => {
  const counterRef = useRef(null);
  // Ajusta estos valores para controlar la velocidad
  const animationDuration = 3000; // Duración total en milisegundos (3 segundos)
  const frameRate = 60; // Cuadros por segundo (para smooth animation)

  useEffect(() => {
    const animateCounter = () => {
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Función de easing para suavizar (opcional)
        const easedProgress = Math.sin(progress * Math.PI/2); // Ease-out effect
        
        const currentValue = Math.floor(easedProgress * targetValue);
        counterRef.current.innerText = `+${currentValue}`;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Animación completada
          counterRef.current.classList.add('pop-animation');
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counterRef.current.innerText = '+0';
          animateCounter();
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className="counter-item">
      <span ref={counterRef} className="counter-value">
        +0
      </span>
      <span className="counter-label">{label}</span>
      <span className="counter-description">{description}</span>
    </div>
  );
};

export default AnimatedCounter;