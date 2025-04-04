import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import './SolutionSelection.css';

const SolutionSelection = ({ onCategorySelect }) => {
  const [animate, setAnimate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setIsTransitioning(true);
    
    setTimeout(() => {
      onCategorySelect(category);
    });
  };

  const categories = Object.keys(modulesData).map(category => {
    const firstModuleKey = Object.keys(modulesData[category])[0];
    const sampleDescription = modulesData[category][firstModuleKey].description.substring(0, 100) + '...';
    
    return {
      name: category,
      description: sampleDescription,
      moduleCount: Object.keys(modulesData[category]).length
    };
  });

  return (
    <section id="modulos" className="modulos-selection-section">
      <div className="modulos-background">
        <div className="modulos-background-gradient-1"></div>
        <div className="modulos-background-gradient-2"></div>
      </div>
      
      <div className="particles-container">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              '--size': `${Math.random() * 6 + 4}px`,
              '--pos-x': `${Math.random() * 100}%`,
              '--pos-y': `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className={`modulos-selection-container ${animate ? 'animate-in' : ''} ${isTransitioning ? 'transition-out' : ''}`}>
        <div className="modulos-header">
          <h2 className="modulos-title">Nuestras Soluciones</h2>
          <p className="modulos-subtitle">
            Selecciona una categoría para explorar sus módulos especializados
          </p>
        </div>

        <div className={`categories-container ${selectedCategory ? 'fade-out' : ''}`}>
        {categories.map((category, index) => (
            <div 
              key={category.name}
              className={`category-card ${selectedCategory === category.name ? 'selected' : ''}`}
              onClick={() => handleCardClick(category.name)}
              style={{ '--delay': `${index * 0.05}s` }}
            >
              <div className="card-content">
                <div className="card-header">
                  <h4>{category.name}</h4>
                  <span className="module-count">{category.moduleCount} módulos</span>
                </div>
                <p className="card-description">{category.description}</p>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="card-highlight"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSelection;