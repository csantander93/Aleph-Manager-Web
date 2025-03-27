import { useState } from 'react';
import './Module.css';

const Module = ({ title, fullDescription, features }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`module-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => window.innerWidth <= 768 && setIsFlipped(!isFlipped)}
      aria-label={`Módulo ${title}`}
    >
      <div className="module-card-inner">
        {/* Frente de la tarjeta */}
        <div className="module-card-front">
          <h3 className="module-title">{title}</h3>
          <div className="interaction-hint">
            <span className="desktop-visible">Pasa el cursor  para ver detalles</span>
            <span className="mobile-visible">Toca para ver detalles</span>
          </div>
        </div>
        
        {/* Reverso de la tarjeta */}
        <div className="module-card-back">
          <h3 className="module-title">{title}</h3>
          <div className="module-content">
            <p className="module-description">{fullDescription}</p>
            {features?.length > 0 && (
              <ul className="module-features">  
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;