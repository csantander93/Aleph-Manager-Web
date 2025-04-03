import React, { useState, useEffect } from 'react';
import './Modulos.css';

const Modulos = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const categories = {
    "Net Discovery": {
      "Endpoint y Servidores": "Descubrimiento automatizado de dispositivos finales y servidores en la red corporativa.",
      "Networking": "Inventario dinámico de equipos de red (routers, switches) y análisis de topología."
    },
    "GRC (Gobierno, Riesgo y Cumplimiento)": {
      "CMDB": "Base de datos de gestión de configuración conforme a ISO 20000. Inventario de activos tecnológicos con relaciones y dependencias.",
      "Clasificación de Activos de Información": "Categorización de activos según criticidad y sensibilidad (ISO 27001).",
      "Análisis de Riesgos Operacionales": "Evaluación de riesgos en procesos de negocio basado en ISO 31000.",
      "Análisis de Riesgos Tecnológicos": "Gestión de riesgos relacionados con tecnología informática y sistemas de información.",
      "Árbol de Dependencias": "Visualización de relaciones entre activos/procesos para análisis de criticidad.",
      "Base de datos sobre eventos de Riesgo Operacional": "Registro histórico de eventos para análisis de tendencias y patrones.",
      "Análisis de Servicios Financieros Digitales": "Evaluación de riesgos específicos en fintech y digital banking.",
      "Análisis de Delegación en Terceras Partes": "Gestión de riesgos en outsourcing y proveedores externos.",
      "Análisis de Servicios descentralizados": "Control de riesgos en infraestructuras distribuidas.",
      "Compliance": "Seguimiento de cumplimiento normativo para múltiples regulaciones.",
      "Base de Incidentes": "Gestión de incidentes de seguridad conforme a ISO 27002.",
      "Vulnerability Management IA": "Detección, priorización y remediación de vulnerabilidades."
    },
    "Continuidad de Negocio": {
      "BIAs": "Análisis de impacto al negocio según ISO 22317. Estimación de impacto operacional/financiero.",
      "Escenarios": "Modelado de situaciones disruptivas para evaluación de preparación.",
      "Estrategias": "Desarrollo de planes de mitigación para operaciones críticas.",
      "Planes de Continuidad": "Documentación de procedimientos para mantener operaciones esenciales.",
      "Planes de Recuperación ante Desastres": "Estrategias para restauración de infraestructura crítica."
    },
    "Pérdida Crediticia Esperada": {
      "Pérdida Crediticia Esperada": "Cálculo de deterioro crediticio según normativa NIIF 9 para carteras de crédito."
    },
    "PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)": {
      "Matriz de Riesgo": "Identificación y valoración de riesgos de lavado de activos y financiamiento al terrorismo.",
      "Monitoreo Transaccional": "Detección de patrones sospechosos en transacciones financieras."
    }
  };

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
            {Object.keys(categories).map((category, index) => (
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
                {Object.keys(categories[activeCategory]).map((moduleName, index) => (
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
          {selectedModule && (
            <div className="module-detail-panel">
              <div className="module-detail-header">
                <h3>{selectedModule}</h3>
                <div className="module-category-badge">
                  {activeCategory.includes('(') ? activeCategory.split('(')[0].trim() : activeCategory}
                </div>
              </div>
              <div className="module-detail-content">
                <p>{categories[activeCategory][selectedModule]}</p>
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

export default Modulos;