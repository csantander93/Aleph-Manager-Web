import React from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImageDesktop from '../../assets/intro-bg.webp'; // Imagen para desktop
import backgroundImageMobile from '../../assets/intro-bg-mobile.webp'; // Nueva imagen para mobile
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
      {/* Fondo responsivo */}
      <div className="intro-background">
        <picture>
          {/* Versión mobile (se muestra en pantallas hasta 768px) */}
          <source 
            srcSet={backgroundImageMobile} 
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* Versión desktop (predeterminada) */}
          <source 
            srcSet={backgroundImageDesktop} 
            type="image/webp"
          />
          {/* Fallback para navegadores que no soportan picture */}
          <img 
            src={backgroundImageDesktop} 
            alt={t('intro.backgroundAlt')} 
            className="background-image" 
            itemProp="image"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="background-overlay"></div>
      </div>
      
      {/* Resto del componente permanece igual */}
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

export default React.memo(Intro);