import React from 'react';
import './TitleModule.css';

const TitleModule = () => {
  return (
    <div 
      className="modulos-header"
      role="region" 
      aria-labelledby="modules-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      {/* Datos estructurados para lista de módulos */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Módulos de Aleph Manager",
          "description": "Soluciones especializadas en gestión de compliance y riesgos financieros"
        })}
      </script>

      <h2 
        id="modules-heading" 
        className="modulos-title" 
        itemProp="name"
      >
        SOLUCIONES DE SOFTWARE
      </h2>
      <p 
        className="modulos-subtitle" 
        itemProp="description"
      >
        Módulos especializados para cada una de las Soluciones de Software
      </p>
    </div>
  );
};

export default TitleModule;