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
      year: "2018"
    },
    {
      id: 2,
      image: bindInnovA,
      title: "Finalista en BIND INNOVA III",
      subtitle: "Programa de Innovación",
      year: "2020"
    }
  ];

  return (
    <section className="awards-section">
      <div className="awards-background">
        {/* Eliminé awards-background-gradient ya que no se usa en el nuevo CSS */}
      </div>
      
      <div className="awards-container">
        <div className="awards-header">
          <h2 className="awards-title">Reconocimientos</h2>
          <p className="awards-subtitle">Premios y distinciones que validan nuestro compromiso con la excelencia</p>
        </div>
        
        <div className="awards-grid">
        {awardsData.map((award) => (
            <div key={award.id} className="award-card">
                <div className="award-image-container">
                <img 
                  src={award.image} 
                  alt={`Reconocimiento: ${award.title} - ${award.subtitle}`} 
                  className={`award-image ${award.subtitle.toLowerCase().replace(/\s+/g, '-')}`} 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Error al cargar imagen del premio: ${award.title}`);
                  }}
                />
                <div className="award-year">{award.year}</div>
                </div>
                <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-subtitle">{award.subtitle}</p>
                </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;