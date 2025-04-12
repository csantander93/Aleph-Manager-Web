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
    setTimeout(() => onCategorySelect(category));
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
    <section 
      id="modulos" 
      className="modulos-selection-section"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      {/* Datos estructurados para lista de productos */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": categories.map((category, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": category.name,
              "description": category.description,
              "applicationCategory": "BusinessApplication"
            }
          }))
        })}
      </script>

      <div className={`modulos-selection-container ${animate ? 'modulos-animate-in' : ''} ${isTransitioning ? 'modulos-transition-out' : ''}`}>
        <div className={`modulos-categories-container ${selectedCategory ? 'modulos-fade-out' : ''}`}>
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className={`modulos-category-card ${selectedCategory === category.name ? 'modulos-selected' : ''}`}
              onClick={() => handleCardClick(category.name)}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(category.name)}
              style={{ '--modulos-delay': `${index * 0.05}s` }}
              role="button"
              tabIndex="0"
              aria-label={`Ver ${category.moduleCount} módulos de ${category.name}`}
              aria-expanded={selectedCategory === category.name}
              itemScope
              itemType="https://schema.org/SoftwareApplication"
              itemProp="itemListElement"
            >
              <div className="modulos-card-content">
                <div className="modulos-card-header">
                  <h4 itemProp="name">{category.name}</h4>
                  <span className="modulos-module-count">{category.moduleCount} módulos</span>
                </div>
                <p className="modulos-card-description" itemProp="description">{category.description}</p>
                <div className="modulos-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="modulos-card-highlight"></div>
              <meta itemProp="applicationCategory" content="BusinessApplication" />
              <meta itemProp="operatingSystem" content="Web" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSelection;