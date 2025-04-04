import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import './ModulesV2.css';

const ModulesV2 = () => {
  const [currentView, setCurrentView] = useState('selection'); // 'selection' | 'detail'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState('categories');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentView('detail');
    if (isMobile) setMobileView('modules');
  };

  const handleBackToSelection = () => {
    setSelectedCategory(null);
    setSelectedModule(null);
    setCurrentView('selection');
    if (isMobile) setMobileView('categories');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedModule(null);
    if (isMobile) setMobileView('modules');
  };

  const handleModuleSelection = (moduleName) => {
    setSelectedModule(selectedModule === moduleName ? null : moduleName);
    if (isMobile) setMobileView('detail');
  };

  const handleMobileBack = () => {
    if (mobileView === 'detail') {
      setSelectedModule(null);
      setMobileView('modules');
    } else if (mobileView === 'modules') {
      setSelectedCategory(null);
      setMobileView('categories');
    } else {
      handleBackToSelection();
    }
  };

  // Preparar datos para la vista de selección
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

      {currentView === 'selection' ? (
        <div className={`modulos-selection-container ${animate ? 'animate-in' : ''}`}>
          <div className="modulos-header">
            <h2 className="modulos-title">Nuestras Soluciones</h2>
            <p className="modulos-subtitle">
              Selecciona una categoría para explorar sus módulos especializados
            </p>
          </div>

          <div className="categories-container">
            {categories.map((category, index) => (
              <div 
                key={category.name}
                className="category-card"
                onClick={() => handleCategorySelect(category.name)}
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
      ) : (
        <div className={`modulos-container ${animate ? 'animate-in' : ''}`}>
          <div className="modulos-header">
            <h2 className="modulos-title">Soluciones de Software</h2>
            <p className="modulos-subtitle">
              Módulos especializados para cada una de las Soluciones de Software
            </p>
          </div>

          <div className="breadcrumbs">
            {!isMobile && (
              <>
                <button 
                  className="back-button" 
                  onClick={handleBackToSelection}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="breadcrumb-divider">|</span>
              </>
            )}
            <span className="breadcrumb">
              {selectedCategory ? 'SOLUCIONES DE SOFTWARE' : 'SELECCIONE UNA SOLUCIÓN'}
            </span>
            {selectedCategory && (
              <>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb">
                  {selectedCategory.includes('(') ? selectedCategory.split('(')[0].trim() : selectedCategory}
                </span>
              </>
            )}
            {selectedModule && (
              <>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb active">{selectedModule}</span>
              </>
            )}
          </div>

          <div className="modulos-content">
            {/* Panel de categorías */}
            <div className={`categories-panel ${!isMobile || mobileView === 'categories' ? 'mobile-active' : ''}`}>
              {isMobile && (
                <div className="mobile-panel-header">
                  <button className="mobile-back-button" onClick={handleMobileBack}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <h3 className="mobile-panel-title">Soluciones de Software</h3>
                </div>
              )}
              
              {!isMobile && (
                <div className="panel-header">
                  <h3>Soluciones de Software</h3>
                  <p>Seleccione una categoría</p>
                </div>
              )}
              
              {Object.keys(modulesData).map((category, index) => (
                <div 
                  key={category}
                  className={`category-item ${selectedCategory === category ? 'active' : ''}`}
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
            {selectedCategory && (
              <div className={`modules-panel ${!isMobile || mobileView === 'modules' ? 'mobile-active' : ''}`}>
                {isMobile && (
                  <div className="mobile-panel-header">
                    <button className="mobile-back-button" onClick={handleMobileBack}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <h3 className="mobile-panel-title">Módulos</h3>
                  </div>
                )}
                
                {!isMobile && (
                  <div className="panel-header">
                    <h3>Módulos</h3>
                    <p>Seleccione un módulo para ver detalles</p>
                  </div>
                )}
                
                <div className="modules-list">
                  {Object.keys(modulesData[selectedCategory]).map((moduleName, index) => (
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
            {selectedModule && selectedCategory && (
              <div className={`module-detail-panel ${!isMobile || mobileView === 'detail' ? 'mobile-active' : ''}`}>
                {isMobile && (
                  <div className="mobile-panel-header">
                    <button className="mobile-back-button" onClick={handleMobileBack}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <h3 className="mobile-panel-title">Detalles</h3>
                  </div>
                )}
                
                {!isMobile && (
                  <>
                    <div className="panel-header">
                      <h3>Descripción</h3>
                      <p>Detalles del módulo seleccionado</p>
                    </div>
                    <div className="module-detail-header">
                      <h3>{selectedModule}</h3>
                      <div className="module-category-badge">
                        {selectedCategory.includes('(') ? selectedCategory.split('(')[0].trim() : selectedCategory}
                      </div>
                    </div>
                  </>
                )}
                
                <div className="module-detail-content">
                  {isMobile && (
                    <div className="module-detail-header">
                      <h3>{selectedModule}</h3>
                      <div className="module-category-badge">
                        {selectedCategory.includes('(') ? selectedCategory.split('(')[0].trim() : selectedCategory}
                      </div>
                    </div>
                  )}
                  
                  <p className="module-description">
                    {modulesData[selectedCategory][selectedModule].description}
                  </p>
                  
                  {modulesData[selectedCategory][selectedModule].features && (
                    <div className="module-features">
                      <h4>Características principales:</h4>
                      <ul>
                        {modulesData[selectedCategory][selectedModule].features.map((feature, i) => (
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
            {!selectedModule && selectedCategory && !isMobile && (
              <div className="module-detail-panel empty-state">
                <div className="panel-header">
                  <h3>Descripción</h3>
                  <p>Detalles del módulo seleccionado</p>
                </div>
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
      )}
    </section>
  );
}

export default ModulesV2;