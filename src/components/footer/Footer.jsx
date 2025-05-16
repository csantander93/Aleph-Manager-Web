import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import logoYafo from '../../assets/Logo Yafo JPG_grises 150dpi.jpg';

const Footer = () => {
  const { t } = useTranslation();

  // Datos estructurados para el footer
  const footerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "url": "https://www.alephmanager.com",
    "logo": "https://alephmanager.com/assets/Gif-Aleph-una-vez.gif",
    "description": t('footer.schemaDescription'),
    "email": "gerencia@alephmanager.com",
    "sameAs": [
      "https://www.linkedin.com/showcase/aleph-manager/about/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": t('footer.country')
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
          <p className="footer-text" itemProp="description">
            {t('footer.intellectualProperty')}
          </p>
          <a 
            href="https://yafoconsultora.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={t('footer.visitYafo')}
          >
            <img 
              src={logoYafo} 
              alt={t('footer.yafoLogoAlt')} 
              className="info-logo" 
              itemProp="logo"
              loading="lazy"
            />
          </a>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('footer.quickLinks')}</h4>
          <ul className="footer-links">
            <li><a href="#inicio" itemProp="url">{t('header.menuItems.home')}</a></li>
            <li><a href="#soluciones">{t('header.menuItems.solutions')}</a></li>
            <li><a href="#caracteristicas">{t('header.menuItems.features')}</a></li>
            <li><a href="#clientes">{t('header.menuItems.clients')}</a></li>
          </ul>
        </div>

        <div className="footer-section" itemScope itemType="https://schema.org/ContactPoint">
          <h4 className="footer-subtitle">{t('footer.contact')}</h4>
          <ul className="footer-contact">
            <li>
              <a 
                href="mailto:gerencia@alephmanager.com" 
                itemProp="email"
                aria-label={t('footer.sendEmailTo')}
              >
                gerencia@alephmanager.com
              </a>
            </li>
            <li className="social-link">
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p itemProp="copyrightYear">
          &copy; {new Date().getFullYear()} <span itemProp="copyrightHolder">Aleph Manager</span>. {t('footer.rightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;