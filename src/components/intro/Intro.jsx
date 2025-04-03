import React from 'react';
import backgroundImage from '../../assets/intro-bg.jpg';
import displayImage from '../../assets/display.png';
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
        {/* Columna de texto */}
        <div className="text-column">
          <div className="title-container">
            <h1 className="main-title">
              Bienvenido a Aleph Manager
            </h1>
          </div>
          
          <p className="description-text">
          Soluciones de software para los sistemas de gestión de normas ISO, Gobierno, Riesgo y cumplimiento (GRC), Seguridad, Continuidad, Pérdida Crediticia Esperada y PLAFT
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

        {/* Columna de imagen */}
        <div className="image-column">
          <div className="image-wrapper">
            <img 
              src={displayImage} 
              alt="Interfaz del software Aleph Manager mostrando funcionalidades"
              className="display-image"
            />
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