import React from 'react';
import './Awards.css';

// Importar imágenes
import bpEmprende from '../../assets/img-awards/patagonia.png';
import bindInnovA from '../../assets/img-awards/bind.png';

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      image: bpEmprende,
      title: "1° puesto Programa BANCO PATAGONIA EMPRENDE 2018",
      subtitle: "BPemprende",
      year: "2018",
      awarder: "Banco Patagonia"
    },
    {
      id: 2,
      image: bindInnovA,
      title: "Finalista en BIND INNOVA III",
      subtitle: "Programa de Innovación",
      year: "2020",
      awarder: "BIND"
    }
  ];

  // Datos estructurados para premios
  const awardsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "award": awardsData.map(award => ({
      "@type": "Award",
      "name": award.title,
      "awardedBy": award.awarder,
      "dateReceived": award.year,
      "description": award.subtitle
    }))
  };

  return (
    <section 
      id="premios" 
      className="awards-section"
      aria-labelledby="awards-heading"
    >
      {/* Datos estructurados para premios */}
      <script type="application/ld+json">
        {JSON.stringify(awardsStructuredData)}
      </script>

      <div className="awards-background" aria-hidden="true">
        {/* Fondo decorativo - marcado como aria-hidden */}
      </div>
      
      <div className="awards-container">
        <div className="awards-header">
          <h2 id="awards-heading" className="awards-title">Reconocimientos</h2>
          <p className="awards-subtitle">Premios y distinciones que validan nuestro compromiso con la excelencia</p>
        </div>
        
        <div className="awards-grid" role="list" aria-label="Lista de premios y reconocimientos">
          {awardsData.map((award) => (
            <div 
              key={award.id} 
              className="award-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/Award"
            >
              <div className="award-image-container">
                <img 
                  src={award.image} 
                  alt={`Logo del premio ${award.title}`} 
                  className={`award-image ${award.subtitle.toLowerCase().replace(/\s+/g, '-')}`} 
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Error al cargar imagen del premio: ${award.title}`);
                  }}
                />
                <div className="award-year" itemProp="dateReceived">{award.year}</div>
              </div>
              <div className="award-content">
                <h3 className="award-title" itemProp="name">{award.title}</h3>
                <p className="award-subtitle" itemProp="description">{award.subtitle}</p>
                <meta itemProp="awardedBy" content={award.awarder} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;