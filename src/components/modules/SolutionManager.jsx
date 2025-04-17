import React, { useState, useEffect } from 'react';
import SolutionSelection from './SolutionSelection';
import Modulos from './Modulos';
import TitleModule from './TitleModule';
import Particles from './Particles';
import './SolutionManager.css'

const SolutionsManager = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar el breakpoint si quieres
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSolutionSelect = (solution) => {
    // Si la solución seleccionada es la misma que la actual, la deseleccionamos
    if (selectedSolution === solution) {
      setSelectedSolution(null);
      setSelectedModule(null);
    } else {
      setSelectedSolution(solution);
      setSelectedModule(null);
    }
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  const handleBackToSolutions = () => {
    setSelectedSolution(null);
    setSelectedModule(null);
  };

  return (
    <div className="solutions-manager" style={{ paddingTop: '80px' }}>
      <Particles />
      <TitleModule />
      
      <div className="solutions-layout">
        {/* Mostrar botón de volver solo en mobile y cuando una solución esté seleccionada */}
        {isMobile && selectedSolution && (
          <button 
            onClick={handleBackToSolutions} 
            className="back-button-mobile"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className="icon">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Volver a soluciones
          </button>
        )}

        {/* Mostrar SolutionSelection solo si NO se ha seleccionado una solución o no estamos en mobile */}
        {(!isMobile || !selectedSolution) && (
          <SolutionSelection 
            onCategorySelect={handleSolutionSelect} 
            selectedCategory={selectedSolution}
          />
        )}

        {/* Mostrar Modulos solo si hay una solución seleccionada */}
        {selectedSolution && (
          <Modulos 
            initialCategory={selectedSolution} 
            selectedModule={selectedModule}
            onModuleSelect={handleModuleSelect}
            onBack={handleBackToModules}
          />
        )}
      </div>
    </div>
  );
};

export default SolutionsManager;
