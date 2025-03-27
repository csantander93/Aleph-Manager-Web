import React from 'react';
import backgroundImage from '../../assets/intro-bg.jpg';
import displayImage from '../../assets/display.png';
import './Intro.css';

const Intro = () => {
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
            Solución software para los sistemas de gestión de normas ISO, Gobierno, Riesgo y cumplimiento (GRC), Seguridad y Continuidad
          </p>
          
          <div className="buttons-container">
            <button className="demo-button">
              Solicitar Contácto
            </button>
            <button className="more-info-button">
              Conocer más
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