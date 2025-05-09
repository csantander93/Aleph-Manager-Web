import React, { useState, useEffect } from 'react';
import alephLogoGif from "../../../assets/Gif-Aleph-una-vez.gif";
import ModulosPopup from './modules-popup/ModulosPopup';
import { modulesData } from '../data/modulesData';
import "./Solutions.css";

const Solutions = () => {
  const [showModulesPopup, setShowModulesPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentPopupTab, setCurrentPopupTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Efecto para bloquear el scroll del body cuando el popup está abierto
  useEffect(() => {
    if (showModulesPopup) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [showModulesPopup]);

  const tabs = [
    'Net Discovery',
    'GRC',
    'Continuidad de Negocio',
    'Pérdida Crediticia Esperada',
    'PLAFT'
  ];

  const tabMapping = {
    'Net Discovery': 'Net Discovery',
    'GRC': 'GRC (Gobierno, Riesgo y Cumplimiento)',
    'Continuidad de Negocio': 'Continuidad de Negocio',
    'Pérdida Crediticia Esperada': 'Pérdida Crediticia Esperada',
    'PLAFT': 'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)'
  };

  const handleTabClick = (tab) => {
    const fullTabName = tabMapping[tab] || tab;
    setCurrentPopupTab(fullTabName);
    setShowModulesPopup(true);
    setSelectedModule(null);
  };

  const handleModuleSelect = (moduleName) => {
    setSelectedModule(moduleName);
  };

  const handleClosePopup = () => {
    setShowModulesPopup(false);
    setSelectedModule(null);
    setCurrentPopupTab(null);
  };

  const handleBack = () => {
    setSelectedModule(null);
  };

  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = isMobile ? 30 : Math.min(Math.floor(window.innerWidth / 10), 100);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(0, 191, 255, ${Math.random() * 0.5 + 0.1})`;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section id='soluciones' className='hero-section' role="region" aria-labelledby="main-heading">
      <canvas 
        id="particle-canvas" 
        className="particle-background"
        aria-hidden="true"
      ></canvas>
      
      <h1 id="main-heading" className="hero-title">SOLUCIONES DE SOFTWARE</h1>
      
      <div className='hero-container'>
        <div className='tabs-container' role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${currentPopupTab === tabMapping[tab] ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
              role="tab"
              aria-selected={currentPopupTab === tabMapping[tab]}
              aria-controls={`${tab.toLowerCase().replace(/\s+/g, '-')}-panel`}
            >
              {tab}
              <span className="tab-highlight"></span>
            </button>
          ))}
        </div>
        
        <div className='hero-content'>
          <img 
            src={alephLogoGif} 
            alt="Aleph Logo" 
            className="hero-logo" 
            loading="lazy"
            width="400"
            height="200"
            decoding="async"
          />
        </div>
      </div>
  
      {showModulesPopup && currentPopupTab && (
        <ModulosPopup
          initialCategory={currentPopupTab}
          selectedModule={selectedModule}
          onModuleSelect={handleModuleSelect}
          onClose={handleClosePopup}
          onBack={handleBack}
          modulesData={modulesData}
          categoryMapping={tabMapping}
        />
      )}
    </section>
  );
};

export default Solutions;