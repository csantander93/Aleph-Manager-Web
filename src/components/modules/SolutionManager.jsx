import React, { useState } from 'react';
import SolutionSelection from './SolutionSelection';
import Modulos from './Modulos';
import TitleModule from './TitleModule';

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
    <div className="solutions-manager"  style={{ paddingTop: '80px' }}>
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