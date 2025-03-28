import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
              <FaTwitter />
            </a>
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
            <li>+1 (123) 456-7890</li>
            <li>Ciudad, País</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos">Términos de Servicio</a></li>
            <li><a href="/cookies">Política de Cookies</a></li>
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