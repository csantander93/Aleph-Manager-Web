import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import logoAleph from '../../assets/Gif-Aleph-una-vez.gif'; // Asegúrate de que esta ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <img src={logoAleph} alt="Logo Aleph Manager" className="info-logo" />
          <p className="footer-text">
            Soluciones innovadoras para la gestión empresarial.
          </p>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/showcase/aleph-manager/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="#modulos">Características</a></li>
            <li><a href="#clientes">Clientes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact">
            <li>gerencia@alephmanager.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aleph Manager. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
