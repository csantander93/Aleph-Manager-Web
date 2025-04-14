import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import logoAleph from '../../assets/Gif-Aleph-una-vez.gif';

const Footer = () => {
  // Datos estructurados para el footer
  const footerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "url": "https://www.alephmanager.com",
    "logo": "https://alephmanager.com/assets/Gif-Aleph-una-vez.gif",
    "description": "Soluciones innovadoras para la gestión empresarial",
    "email": "gerencia@alephmanager.com",
    "sameAs": [
      "https://www.linkedin.com/showcase/aleph-manager/about/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Argentina"
    }
  };

  return (
    <footer className="footer-container" itemScope itemType="https://schema.org/WPFooter">
      {/* Datos estructurados para el footer */}
      <script type="application/ld+json">
        {JSON.stringify(footerStructuredData)}
      </script>

      <div className="footer-content">
        <div className="footer-section footer-logo-section" itemScope itemType="https://schema.org/Organization">
          <img 
            src={logoAleph} 
            alt="Logo Aleph Manager" 
            className="info-logo" 
            itemProp="logo"
            loading="lazy"
          />
          <p className="footer-text" itemProp="description">
            Soluciones innovadoras para la gestión empresarial.
          </p>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/showcase/aleph-manager/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visitar nuestro perfil de LinkedIn" 
              className="social-icon"
              itemProp="sameAs"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn de Aleph Manager</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio" itemProp="url">Inicio</a></li>
            <li><a href="#modulos">Soluciones de software</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#clientes">Clientes</a></li>
          </ul>
        </div>

        <div className="footer-section" itemScope itemType="https://schema.org/ContactPoint">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <a 
                href="mailto:gerencia@alephmanager.com" 
                itemProp="email"
                aria-label="Enviar correo electrónico a gerencia@alephmanager.com"
              >
                gerencia@alephmanager.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p itemProp="copyrightYear">
          &copy; {new Date().getFullYear()} <span itemProp="copyrightHolder">Aleph Manager</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;