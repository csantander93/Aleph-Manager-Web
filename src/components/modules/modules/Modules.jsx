import Module from '../module/Module';
import modulesData from '../data/modulesData';
import './Modules.css';

const Modules = () => {
  return (
    <div className="modules-container">
      <h2 className="section-title">Módulos</h2>
      <div className="modules-grid">
        {modulesData.map((module) => (
          <Module
            key={module.id}
            title={module.title}
            description={module.shortDescription}
            fullDescription={module.fullDescription}
            features={module.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Modules;