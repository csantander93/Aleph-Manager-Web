import React from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../assets/intro-bg.webp';
import logoGif from '../../assets/Gif-Aleph-una-vez.gif';
import './Intro.css';

const Intro = () => {
  const { t } = useTranslation();

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
          alt={t('intro.backgroundAlt')} 
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
            <h1 className="sr-only" itemProp="name">{t('intro.srTitle')}</h1>
            <img 
              src={logoGif} 
              alt={t('intro.logoAlt')}
              className="logo-gif"
            />
          </div>
          
          <p className="description-text" itemProp="description">
            {t('intro.description')}
          </p>
          
          <div className="buttons-container">
            <button 
              className="demo-button"
              onClick={() => scrollToSection('#contacto')}
              aria-label={t('intro.ctaPrimaryAria')}
            >
              {t('intro.ctaPrimary')}
              <span className="button-underline"></span>
            </button>
            <button 
              className="more-info-button"
              onClick={() => scrollToSection('#soluciones')}
              aria-label={t('intro.ctaSecondaryAria')}
            >
              {t('intro.ctaSecondary')}
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
          "name": t('intro.schemaName'),
          "description": t('intro.schemaDescription'),
          "image": "https://alephmanager.com/assets/intro-bg.jpg"
        })}
      </script>
    </section>
  );
};

export default Intro;