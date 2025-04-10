import React, { useState } from 'react';
import SolutionSelection from './SolutionSelection';
import Modulos from './Modulos';
import TitleModule from './TitleModule';
import Particles from './Particles';

const SolutionsManager = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [showModules, setShowModules] = useState(false);

  const handleSolutionSelect = (solution) => {
    setSelectedSolution(solution);
    setShowModules(true);
  };

  const handleBackToSolutions = () => {
    setShowModules(false);
    setSelectedSolution(null);
  };

  return (
    
      <div className="solutions-manager" style={{ 
        paddingTop: '80px'
      }}>
        <Particles />
        {/* Efectos de fondo */}
        <div className="solutions-background-effects">
          <div className="solutions-gradient-primary"></div>
          <div className="solutions-gradient-secondary"></div>
        </div>
  
        <TitleModule />
        {!showModules ? (
          <SolutionSelection onCategorySelect={handleSolutionSelect} />
        ) : (
          <Modulos 
            initialCategory={selectedSolution} 
            onBack={handleBackToSolutions}
          />
        )}
      </div>
    );
  };

export default SolutionsManager;