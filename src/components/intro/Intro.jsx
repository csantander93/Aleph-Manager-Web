import React from 'react';
import backgroundImage from '../../assets/intro-bg.jpg';
import logoGif from '../../assets/Gif-Aleph-una-vez.gif'; // Asegúrate de tener este archivo GIF
import './Intro.css';

const Intro = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="intro-section">
      {/* Fondo */}
      <div className="intro-background">
        <img src={backgroundImage} alt="Fondo de pantalla con diseño abstracto" className="background-image" />
        <div className="background-overlay"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="intro-container">
        {/* Columna de texto (modificada) */}
        <div className="text-column">
          <div className="title-container">
            {/* Reemplazamos el h1 por el GIF del logo */}
            <img 
              src={logoGif} 
              alt="Logo animado de Aleph Manager" 
              className="logo-gif"
            />
          </div>
          
          <p className="description-text">
            Soluciones de software para los sistemas de gestión de normas ISO, Gobierno, Riesgo y cumplimiento (GRC), Seguridad, Continuidad, Pérdida Crediticia Esperada y Prevención de Lavado de Activos y Financiamiento del Terrorismo (PLAFT)
          </p>
          
          <div className="buttons-container">
            <button 
              className="demo-button"
              onClick={() => scrollToSection('#contacto')}
            >
              Solicitar Contacto
              <span className="button-underline"></span>
            </button>
            <button 
              className="more-info-button"
              onClick={() => scrollToSection('#modulos')}
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
    </section>
  );
};

export default Intro;