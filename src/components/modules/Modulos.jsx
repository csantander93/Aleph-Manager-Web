import React, { useState, useEffect, useRef } from 'react';
import { modulesData } from './data/modulesData';
import './Modulos.css';
import { Helmet } from 'react-helmet';

const Modulos = ({ initialCategory, selectedModule, onModuleSelect, onBack }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState('modules');
  const [animate, setAnimate] = useState(false);
  const descriptionPanelRef = useRef(null);
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    setAnimate(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedModule) {
      setMobileView('detail');
    } else {
      setMobileView('modules');
    }
  }, [selectedModule]);

  useEffect(() => {
    if (selectedModule) {
      setContentKey(prev => prev + 1);
      requestAnimationFrame(() => {
        if (descriptionPanelRef.current) {
          descriptionPanelRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      });
    }
  }, [selectedModule]);

  const handleModuleClick = (moduleName) => {
    onModuleSelect(moduleName);
    if (isMobile) setMobileView('detail');
  };

  const handleMobileBack = () => {
    onBack();
    setMobileView('modules');
  };

  return (
    <>
      <Helmet>
        <title>Aleph Manager</title>
        <meta name="description" content="..." />
        <meta name="keywords" content="..." />
      </Helmet>
      
      <section id="modulos" className="modulos-section">
        <div className={`modulos-container ${animate ? 'animate-in' : ''}`}>
          <div className="breadcrumbs">
            {isMobile && mobileView !== 'modules' && (
              <button className="back-button" onClick={handleMobileBack}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Volver
              </button>
            )}
            <span className="breadcrumb">
              {initialCategory.includes('(') ? initialCategory.split('(')[0].trim() : initialCategory}
            </span>
            {selectedModule && (
              <>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb active">{selectedModule}</span>
              </>
            )}
          </div>

          <div className="modulos-content">
            <div className={`modules-panel ${!isMobile || mobileView === 'modules' ? 'mobile-active' : ''}`}>
              {isMobile && (
                <div className="mobile-panel-header">
                  <h3 className="mobile-panel-title">Módulos</h3>
                  <span className="modulos-count">
                    {Object.keys(modulesData[initialCategory]).length} módulos
                  </span>
                </div>
              )}
              
              {!isMobile && (
                <div className="panel-header modulos-header-container">
                  <h3>Módulos</h3>
                  <span className="modulos-count">
                    {Object.keys(modulesData[initialCategory]).length} módulos
                  </span>
                  <p>Seleccione un módulo para ver detalles</p>
                </div>
              )}
              
              <div className="modules-list">
                {Object.keys(modulesData[initialCategory]).map((moduleName, index) => (
                  <div
                    key={moduleName}
                    className={`module-item ${selectedModule === moduleName ? 'selected' : ''}`}
                    onClick={() => handleModuleClick(moduleName)}
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

            <div className={`module-detail-panel ${!isMobile || mobileView === 'detail' ? 'mobile-active' : ''}`}>
              {selectedModule ? (
                <>
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
                          {initialCategory.includes('(') ? initialCategory.split('(')[0].trim() : initialCategory}
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div 
                    className="module-detail-content" 
                    ref={descriptionPanelRef}
                    key={`content-${contentKey}`}
                  >
                    {isMobile && (
                      <div className="module-detail-header">
                        <h3>{selectedModule}</h3>
                        <div className="module-category-badge">
                          {initialCategory.includes('(') ? initialCategory.split('(')[0].trim() : initialCategory}
                        </div>
                      </div>
                    )}
                    
                    <p className="module-description">
                      {modulesData[initialCategory][selectedModule].description}
                    </p>
                    
                    {modulesData[initialCategory][selectedModule].features && (
                      <div className="module-features">
                        <h4>Características principales:</h4>
                        <ul>
                          {modulesData[initialCategory][selectedModule].features.map((feature, i) => (
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
                </>
              ) : (
                !isMobile && (
                  <div className="empty-state">
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
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modulos;