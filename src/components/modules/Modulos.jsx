import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import './Modulos.css';
import { Helmet } from 'react-helmet';

const Modulos = ({ initialCategory, onBack }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedModule, setSelectedModule] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState(initialCategory ? 'modules' : 'categories');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setMobileView('modules');
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setSelectedModule(null);
    if (isMobile) setMobileView('modules');
  };

  const handleModuleSelection = (moduleName) => {
    setSelectedModule(selectedModule === moduleName ? null : moduleName);
    if (isMobile) setMobileView('detail');
  };

  const handleMobileBack = () => {
    if (mobileView === 'detail') {
      setMobileView('modules');
    } else if (mobileView === 'modules') {
      if (onBack && !activeCategory) {
        onBack();
      } else {
        setActiveCategory(null);
        setMobileView('categories');
      }
    }
  };

  const handleBackToSolutions = () => {
    if (onBack) {
      onBack();
    }
  };
  

return (
  <>
    <Helmet>
      <title>Aleph Manager</title>
      <meta name="description" content="..." />
      <meta name="keywords" content="..." />
      <script type="application/ld+json">
        {JSON.stringify({ /* datos estructurados */ })}
      </script>
    </Helmet>
    <section id="modulos" className="modulos-section">
      <div className={`modulos-container ${animate ? 'animate-in' : ''}`}>
        <div className="breadcrumbs">
          {!isMobile && (
            <button className="back-button" onClick={handleBackToSolutions}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Volver
            </button>
          )}
          <span className="breadcrumb">
            {activeCategory ? 'SOLUCIONES DE SOFTWARE' : 'SELECCIONE UNA SOLUCIÓN'}
          </span>
          {activeCategory && (
            <>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb">
                {activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}
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
                <button className="mobile-back-button" onClick={handleBackToSolutions}>
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
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.05}s` }}
              >
                <button 
                  className="category-header"
                  onClick={() => handleCategoryClick(category)}
                >
                  <span>{category.includes('(') ? category.split('(')[0].trim() : category}</span>
                  {isMobile && (
                    <span className="modulos-count">
                      {Object.keys(modulesData[category]).length} módulos
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Estado vacío cuando no hay categoría seleccionada */}
          {!activeCategory && (
            <div className={`modules-panel empty-state ${!isMobile || mobileView === 'modules' ? 'mobile-active' : ''}`}>
              {isMobile && (
                <div className="mobile-panel-header">
                  <button className="mobile-back-button" onClick={handleBackToSolutions}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <h3 className="mobile-panel-title">Módulos</h3>
                  {activeCategory && (
                    <span className="modulos-count">
                      {Object.keys(modulesData[activeCategory]).length} módulos
                    </span>
                  )}
                </div>
              )}
    
              {!isMobile && (
                <div className="panel-header modulos-header-container">
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <h3>Módulos</h3>
                  </div>
                  {activeCategory && (
                    <span className="modulos-count">
                      {Object.keys(modulesData[activeCategory]).length} módulos
                    </span>
                  )}
                  <p>Seleccione un módulo para ver detalles</p>
                </div>
              )}
        
              <div className="empty-state-content">
                <div className="empty-state-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 8v4M12 16h.01" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Selecciona una categoría</h4>
                <p>Por favor, elige una categoría de soluciones de la lista a la izquierda para ver los módulos disponibles.</p>
              </div>
            </div>
          )}

          {/* Panel de módulos cuando hay categoría seleccionada */}
          {activeCategory && (
            <div className={`modules-panel ${!isMobile || mobileView === 'modules' ? 'mobile-active' : ''}`}>
              {isMobile && (
                <div className="mobile-panel-header">
                  <button className="mobile-back-button" onClick={handleMobileBack}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <h3 className="mobile-panel-title">Módulos</h3>
                  <span className="modulos-count">
                    {Object.keys(modulesData[activeCategory]).length} módulos
                  </span>
                </div>
              )}
              
              {!isMobile && (
                <div className="panel-header modulos-header-container">
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <h3>Módulos</h3>
                  </div>
                  <span className="modulos-count">
                    {Object.keys(modulesData[activeCategory]).length} módulos
                  </span>
                  <p>Seleccione un módulo para ver detalles</p>
                </div>
              )}
              
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
                    <h3 title={selectedModule}>{selectedModule}</h3>
                    <div className="module-category-badge">
                      {activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}
                    </div>
                  </div>
                </>
              )}
              
              <div className="module-detail-content">
                {isMobile && (
                  <div className="module-detail-header">
                    <h3>{selectedModule}</h3>
                    <div className="module-category-badge">
                      {activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}
                    </div>
                  </div>
                )}
                
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

          {/* Estado vacío cuando no hay selección (solo escritorio) */}
          {!selectedModule && activeCategory && !isMobile && (
            <div className="module-detail-panel empty-state">
              <div className="panel-header">
                <h3>Descripción</h3>
                <p>Detalles del módulo seleccionado</p>
              </div>
              <div className="empty-state-content">
                <div className="empty-state-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 8v4M12 16h.01" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Selecciona un módulo</h4>
                <p>Haz clic en cualquiera de los módulos de la izquierda para ver su descripción detallada.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  </>
);}

export default Modulos;