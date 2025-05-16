import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ModulosPopup.css';

const ModulosPopup = ({
  initialCategory,
  selectedModule,
  onModuleSelect,
  onClose,
  onBack,
  modulesData,
  categoryMapping,
  currentLanguage
}) => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [isPanelAnimated, setIsPanelAnimated] = useState(false);
  const descriptionPanelRef = useRef(null);

  // Función para obtener el nombre corto de la categoría (sin paréntesis)
  const getShortCategoryName = (category) => {
    return category.includes('(') ? category.split('(')[0].trim() : category;
  };

  // Función para encontrar la categoría real en modulesData
  const findActualCategory = (displayCategory) => {
    // Primero buscar coincidencia exacta
    if (modulesData[displayCategory]) {
      return displayCategory;
    }
    
    // Si no existe, buscar en el mapeo inverso
    for (const [key, value] of Object.entries(categoryMapping)) {
      if (value === displayCategory) {
        return key;
      }
    }
    
    // Si no se encuentra, devolver la original (con advertencia)
    console.warn(`Category "${displayCategory}" not found in modulesData`);
    return displayCategory;
  };

  // Obtener la categoría real basada en el mapeo
  const actualCategory = findActualCategory(initialCategory);

  // Resetear scroll al cambiar de módulo
  useEffect(() => {
    if (descriptionPanelRef.current) {
      descriptionPanelRef.current.scrollTop = 0;
    }
  }, [selectedModule]);

  // Animación de entrada
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Animación del panel de detalles
  useEffect(() => {
    if (selectedModule) {
      setTimeout(() => setIsPanelAnimated(true), 50);
    } else {
      setIsPanelAnimated(false);
    }
  }, [selectedModule]);

  // Manejar scroll interno del popup
  useEffect(() => {
    const handleWheel = (e) => {
      if (!descriptionPanelRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = descriptionPanelRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      
      if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
        e.stopPropagation();
      }
    };

    const panel = descriptionPanelRef.current;
    if (panel) {
      panel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (panel) {
        panel.removeEventListener('wheel', handleWheel);
      }
    };
  }, [selectedModule]);

  // Validar que la categoría exista
  if (!modulesData[actualCategory]) {
    console.error(`Category "${actualCategory}" not found in modulesData for language "${currentLanguage}"`);
    return null;
  }

  return (
    <div className="popup-modulos-popup-overlay">
      <div className={`popup-modulos-popup-container ${animate ? 'animate-in' : ''}`}>
        <div className="popup-header">
          <div className="breadcrumbs">
            <span className="breadcrumb">
              {categoryMapping[actualCategory] || actualCategory}
            </span>
            {selectedModule && (
              <>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb active">{selectedModule}</span>
              </>
            )}
          </div>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label={t('popup.closeAria')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className={`popup-modulos-popup-content ${isPanelAnimated ? 'panel-animated' : ''}`}>
          <div className="popup-modules-panel">
            <div className="panel-header popup-modulos-header-container">
              <h3>{t('popup.modulesTitle')}</h3>
              <span className="popup-modulos-count">
                {Object.keys(modulesData[actualCategory]).length} {t('popup.modulesCount')}
              </span>
              <p>{t('popup.moduleSelectionPrompt')}</p>
            </div>
            
            <div className="popup-modules-list">
              {Object.keys(modulesData[actualCategory]).map((moduleName, index) => (
                <div
                  key={moduleName}
                  className={`popup-module-item ${selectedModule === moduleName ? 'selected' : ''}`}
                  onClick={() => onModuleSelect(moduleName)}
                  style={{ '--delay': `${index * 0.05 + 0.1}s` }}
                >
                  <div className="popup-module-icon">
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

          <div className="popup-module-detail-panel" ref={descriptionPanelRef}>
            {selectedModule && (
              <>
                <div className="popup-module-detail-header">
                  <div className="popup-mobile-back-button-container">
                    <button 
                      className="popup-mobile-back-button"
                      onClick={onBack}
                      aria-label={t('popup.backAria')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {t('popup.backButton')}
                    </button>
                  </div>
                  <h3 title={selectedModule}>{selectedModule}</h3>
                  <div className="popup-module-category-badge">
                    {getShortCategoryName(actualCategory)}
                  </div>
                </div>
                
                <div className="popup-module-detail-content">
                  <p className="popup-module-description">
                    {modulesData[actualCategory][selectedModule].description}
                  </p>
                  
                  {modulesData[actualCategory][selectedModule].features && (
                    <div className="popup-module-features">
                      <h4>{t('popup.mainFeatures')}:</h4>
                      <ul>
                        {modulesData[actualCategory][selectedModule].features.map((feature, i) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulosPopup;