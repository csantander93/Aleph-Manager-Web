import React from 'react';
import backgroundImage from '../../assets/intro-bg.jpg';
import logoGif from '../../assets/Gif-Aleph-una-vez.gif';
import './Intro.css';

const Intro = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="intro-section" itemScope itemType="https://schema.org/WebPage">
      {/* Fondo */}
      <div className="intro-background">
        <img 
          src={backgroundImage} 
          alt="Sistemas de gestión empresarial ISO y GRC" 
          className="background-image" 
          itemProp="image"
        />
        <div className="background-overlay"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="intro-container">
        {/* Columna de texto */}
        <div className="text-column">
          <div className="title-container">
            <h1 className="sr-only" itemProp="name">Aleph Manager - Soluciones en Gestión de Normas</h1>
            <img 
              src={logoGif} 
              alt="Aleph Manager - Plataforma integral para gestión de riesgos" 
              className="logo-gif"
            />
          </div>
          
          <p className="description-text" itemProp="description">
            Soluciones de software para los sistemas de gestión de normas ISO, Gobierno, Riesgo y cumplimiento (GRC), Seguridad, Continuidad, Pérdida Crediticia Esperada y Prevención de Lavado de Activos y Financiamiento del Terrorismo (PLAFT)
          </p>
          
          <div className="buttons-container">
            <button 
              className="demo-button"
              onClick={() => scrollToSection('#contacto')}
              aria-label="Solicitar contacto para demostración"
            >
              Solicitar Contacto
              <span className="button-underline"></span>
            </button>
            <button 
              className="more-info-button"
              onClick={() => scrollToSection('#modulos')}
              aria-label="Conocer más sobre los módulos"
            >
              Conocer más
              <span className="button-underline"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Efectos de luz */}
      <div className="light-effects">
        <div className="light-effect light-effect-1"></div>
        <div className="light-effect light-effect-2"></div>
      </div>

      {/* Datos estructurados */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Aleph Manager - Soluciones en Gestión",
          "description": "Software para sistemas de gestión ISO, GRC y PLAFT",
          "image": "https://alephmanager.com/assets/intro-bg.jpg"
        })}
      </script>
    </section>
  );
};

export default Intro;