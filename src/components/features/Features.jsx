import React, { useRef, useEffect } from 'react';
import './Features.css';

// Componentes de iconos con animaciones mejoradas
const ClockIcon = () => (
  <div className="icon-container clock-icon">
    <svg className="feature-icon-svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" className="clock-face" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line 
          key={i}
          x1="12" y1="2" 
          x2="12" y2={i % 3 === 0 ? "4" : "3"} 
          className="clock-mark"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      <line 
        className="clock-hour-hand" 
        x1="12" y1="12" 
        x2="12" y2="7" 
      />
      <line 
        className="clock-minute-hand" 
        x1="12" y1="12" 
        x2="12" y2="4" 
      />
      <circle cx="12" cy="12" r="2" className="clock-center" />
    </svg>
    <div className="pulse-effect"></div>
  </div>
);

const ShieldIcon = () => (
  <div className="icon-container shield-icon">
    <svg className="feature-icon-svg" viewBox="0 0 24 24">
      <path 
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
        className="shield-body"
      />
      <rect 
        className="shield-lock" 
        x="9" y="11" 
        width="6" 
        height="5" 
        rx="1" 
      />
      <circle 
        className="shield-keyhole" 
        cx="12" 
        cy="14" 
        r="1" 
      />
      <path 
        className="shield-keyhole" 
        d="M12 11v-1a2 2 0 1 1 0-4" 
      />
    </svg>
    <div className="glow-effect"></div>
  </div>
);

const MoneyIcon = () => (
  <div className="icon-container money-icon">
    <svg className="feature-icon-svg" viewBox="0 0 24 24">
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        className="money-circle"
      />
      <path 
        className="money-line" 
        d="M12 6v12" 
      />
      <path 
        className="money-line" 
        d="M15 9a3 3 0 1 1-6 0" 
      />
      <text 
        x="12" 
        y="16" 
        textAnchor="middle" 
        fontSize="6" 
        className="money-symbol"
      >
        $
      </text>
    </svg>
    <div className="sparkle-effect"></div>
  </div>
);

const GraphIcon = () => (
  <div className="icon-container graph-icon">
    <svg className="feature-icon-svg" viewBox="0 0 24 24">
      <line x1="4" y1="20" x2="20" y2="20" className="graph-axis" />
      <line x1="4" y1="20" x2="4" y2="4" className="graph-axis" />
      <polyline 
        className="graph-line"
        points="6 16 10 8 14 14 18 6" 
      />
      {[6, 10, 14, 18].map((x, i) => (
        <circle 
          key={i}
          className="graph-dot"
          cx={x} 
          cy={[16, 8, 14, 6][i]} 
          r="1.5" 
        />
      ))}
      <path 
        className="graph-arrow"
        d="M20 4l-2 2 2 2" 
      />
    </svg>
    <div className="ripple-effect"></div>
  </div>
);

const Features = () => {
  const featureRefs = useRef([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Disminuye tiempos de carga",
      description: "La aplicación web reemplaza las planillas convencionales y permite relevar información de los referentes mediante cuestionarios online, personalizados y con datos históricos.",
      align: "left",
      icon: <ClockIcon />,
      delay: 0.1
    },
    {
      title: "Protege la integridad de información",
      description: "El diseño de la herramienta permite resguardar la integridad de la información en relación con la no alteración del estado registrado originalmente, con el fin de garantizar su confiabilidad.",
      align: "right",
      icon: <ShieldIcon />,
      delay: 0.3
    },
    {
      title: "Económico y personalizado",
      description: "Brindamos un producto y servicio de excelencia, económico y personalizado a cada cliente. Generamos un espacio de buena relación profesional y colaboración constante.",
      align: "left",
      icon: <MoneyIcon />,
      delay: 0.5
    },
    {
      title: "Mejora continua",
      description: "El diseño de la herramienta cuenta con algoritmos que permiten detectar recomendaciones personalizadas. Muestra puntos fuertes, que hay que tratar de mantener y áreas de mejora.",
      align: "right",
      icon: <GraphIcon />,
      delay: 0.7
    }
  ];

  return (
    <section id="caracteristicas" className="features-section" ref={sectionRef}>
      <div className="features-background">
        <div className="features-background-gradient-1"></div>
        <div className="features-background-gradient-2"></div>
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 2}s`,
              '--size': `${Math.random() * 4 + 2}px`,
              '--pos-x': `${Math.random() * 100}%`,
              '--pos-y': `${Math.random() * 100}%`
            }} />
          ))}
        </div>
      </div>

      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title animate-gradient">
            Características
          </h2>
          <p className="features-subtitle">
            El enfoque integrado de Aleph Manager permite crecer con las distintas herramientas que componen la plataforma, y de esa manera tomar ventajas administrativas, ahorro de costos y tiempo.
          </p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-item ${feature.align}`}
              ref={el => featureRefs.current[index] = el}
              style={{ '--delay': `${feature.delay}s` }}
            >
              <div className="feature-image-placeholder">
                <div className="feature-icon">
                  {feature.icon}
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;