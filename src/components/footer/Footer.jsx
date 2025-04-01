import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Aleph Manager</h3>
          <p className="footer-text">
            Soluciones innovadoras para la gestión empresarial.
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#clientes">Clientes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact">
            <li>gerencia@alephmanager.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Acceso</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Home</a></li>
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