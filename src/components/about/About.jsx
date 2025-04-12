import React, { useEffect } from 'react';
import teamImage from '../../assets/mockuper.png';
import './About.css';

const About = () => {
  useEffect(() => {
    const animateGradient = () => {
      const element = document.querySelector('.about-title');
      if (element) {
        element.style.backgroundPosition = '0% 50%';
        setTimeout(() => {
          element.style.backgroundPosition = '100% 50%';
        }, 100);
      }
    };
    animateGradient();
  }, []);

  return (
    <section id="sobre-nosotros" className="about-section" itemScope itemType="https://schema.org/AboutPage">
      {/* Datos estructurados */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "description": "Equipo especializado en sistemas financieros complejos y gestión de compliance",
          "mainEntity": [
            {
              "@type": "Service",
              "serviceType": "Consultoría financiera",
              "description": "Método de trabajo basado en metodologías testeadas y verificadas en el mercado"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Aleph Manager",
              "description": "Plataforma para gestión integrada de normas internacionales"
            }
          ]
        })}
      </script>

      <div className="about-background">
        <div className="about-background-gradient-1"></div>
        <div className="about-background-gradient-2"></div>
      </div>

      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title animate-gradient" itemProp="headline">
            Transformamos la gestión de compliance con tecnología de vanguardia
          </h2>
          <p className="about-subtitle" itemProp="description">
            Expertos en sistemas financieros complejos donde la precisión y adaptabilidad son clave
          </p>
        </div>

        <div className="about-content">
          <div className="about-text-column">
            <div className="space-y-6">
              <div className="about-text-block" itemProp="description">
                <p>
                  Somos profesionales calificados y especializados en la Industria financiera caracterizada por su complejidad y competitividad.
                </p>
              </div>
              
              <div className="about-text-block about-text-block-emerald">
                <p itemProp="description">
                  Nuestro diferencial es brindar un servicio personalizado, flexible, profesional y adecuado a cada necesidad.
                </p>
              </div>
            </div>
            
            <div className="about-services">
              {[
                {
                  title: "Consultoría",
                  description: "Método de trabajo basado en metodologías testeadas y verificadas en el mercado.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Gestión integrada",
                  description: "Aleph Manager permite la implantación integrada, gestión, mantenimiento y despliegue de múltiples normas nacionales e internacionales.",
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                {
                  title: "Servicios",
                  description: "Nuestro equipo propone un enfoque práctico y didáctico en cada uno de los proyectos que realizamos.",
                  icon: "M5 13l4 4L19 7"
                }
              ].map((item, index) => (
                <div key={index} className="about-service-item" itemScope itemType="https://schema.org/Service">
                  <div className="about-service-icon">
                    <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="about-service-title" itemProp="name">
                      {item.title}
                    </h4>
                    <p className="about-service-description" itemProp="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image-column">
            <div className="about-image-container">
              <img 
                src={teamImage} 
                alt="Equipo de consultores financieros de Aleph Manager trabajando en sistemas de compliance" 
                itemProp="image"
              />
              <div className="about-image-overlay"></div>
              <div className="about-image-caption">
                <p itemProp="slogan">
                  "Somos especialistas en la implementación e integración de procesos de mejora organizacional basados en estándares internacionales"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;