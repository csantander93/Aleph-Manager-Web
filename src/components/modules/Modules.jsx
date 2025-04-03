import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import './Modules.css';

const Modules = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setSelectedModule(null);
  };

  const handleModuleSelection = (moduleName) => {
    setSelectedModule(selectedModule === moduleName ? null : moduleName);
  };

  return (
    <section id="modulos" className="modulos-section">
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

      <div className={`modulos-container ${animate ? 'animate-in' : ''}`}>
        <div className="modulos-header">
          <h2 className="modulos-title">Plataforma Integral de Módulos</h2>
          <p className="modulos-subtitle">
            Soluciones especializadas para cada área de cumplimiento y gestión de riesgos
          </p>
        </div>

        <div className="modulos-content">
          {/* Panel de categorías */}
          <div className="categories-panel">
            {Object.keys(modulesData).map((category, index) => (
              <div 
                key={category}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.05}s` }}
              >
                <button 
                  className="category-header"
                  onClick={() => handleCategoryClick(category)}
                >
                  <span>{category}</span>
                  <svg className="accordion-icon" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Panel de módulos */}
          {activeCategory && (
            <div className="modules-panel">
              <div className="modules-header">
                <h3>{activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}</h3>
              </div>
              <div className="modules-list">
                {Object.keys(modulesData[activeCategory]).map((moduleName, index) => (
                  <div
                    key={moduleName}
                    className={`module-item ${selectedModule === moduleName ? 'selected' : ''}`}
                    onClick={() => handleModuleSelection(moduleName)}
                    style={{ '--delay': `${index * 0.05 + 0.1}s` }}
                  >
                    <div className="module-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h4>{moduleName}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detalle del módulo seleccionado */}
          {selectedModule && activeCategory && (
            <div className="module-detail-panel">
              <div className="module-detail-header">
                <h3>{selectedModule}</h3>
                <div className="module-category-badge">
                  {activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}
                </div>
              </div>
              <div className="module-detail-content">
                <p className="module-description">
                  {modulesData[activeCategory][selectedModule].description}
                </p>
                
                {modulesData[activeCategory][selectedModule].features && (
                  <div className="module-features">
                    <h4>Características principales:</h4>
                    <ul>
                      {modulesData[activeCategory][selectedModule].features.map((feature, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Estado vacío cuando no hay selección */}
          {!selectedModule && activeCategory && (
            <div className="module-detail-panel empty-state">
              <div className="empty-state-content">
                <div className="empty-state-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <div className="glow-effect"></div>
                </div>
                <h4>Selecciona un módulo</h4>
                <p>Haz clic en cualquiera de los módulos de la izquierda para ver su descripción detallada.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Modules;