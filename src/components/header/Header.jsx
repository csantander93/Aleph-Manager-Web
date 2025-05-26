import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import logoPreload from '../../assets/LOGO ALEPH FIJO v02.webp?as=webp&width=200&quality=80';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t, i18n } = useTranslation();

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);

    // Only set active section if scrolling has started
    if (window.scrollY > 10) {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveSection(currentSection);
    } else {
      setActiveSection(''); // No section active when at the top
    }
  }, []);

  // Handle click on nav items
  const handleNavClick = (href) => {
    setActiveSection(href);
    setMenuOpen(false); // Close mobile menu on click
  };

  useEffect(() => {
    // Apply dark theme
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--bg-color', '#0A0A0A');
    }

    // Preload images
    const preloadImages = () => {
      const img = new Image();
      img.src = logoPreload;
    };

    preloadImages();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      window.dispatchEvent(new Event('languageChanged'));
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const menuItems = [
    { name: t('header.menuItems.home'), href: "#inicio", key: "home" },
    { name: t('header.menuItems.solutions'), href: "#soluciones", key: "solutions" },
    { name: t('header.menuItems.features'), href: "#caracteristicas", key: "features" },
    { name: t('header.menuItems.clients'), href: "#clientes", key: "clients" },
    { name: t('header.menuItems.contact'), href: "#contacto", key: "contact" }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <link
        rel="preload"
        href={logoPreload}
        as="image"
        fetchpriority="high"
        media="(max-width: 768px)"
      />
      
      <div className="header-container">
        <div className="flex items-center">
          <a href="#inicio" className="cursor-pointer" aria-label={t('header.ariaLabels.logo')}>
            <img
              src={logoPreload}
              alt={t('header.logoAlt')}
              className="header-logo"
              loading="eager"
              fetchpriority="high"
              width="200"
              height="50"
              decoding="sync"
            />
          </a>
        </div>

        <nav className="nav-desktop" aria-label={t('header.ariaLabels.navigation')}>
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={`nav-item ${isScrolled ? 'nav-item-scrolled' : 'nav-item-transparent'} ${
                activeSection === item.href ? 'active' : ''
              }`}
            >
              {item.name}
              <span className={`nav-underline ${
                activeSection === item.href ? 'active' : ''
              }`}></span>
            </a>
          ))}
          
          <button
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="language-switcher"
            aria-label={t('header.ariaLabels.languageSwitcher')}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        <div className="mobile-elements-container">
          <button
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="mobile-language-button"
            aria-label={t('header.ariaLabels.languageSwitcher')}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            aria-label={menuOpen ? t('header.ariaLabels.menuClose') : t('header.ariaLabels.menuToggle')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`mobile-menu-button ${isScrolled ? 'mobile-menu-button-scrolled' : 'mobile-menu-button-transparent'}`}
          >
            <svg
              className="mobile-menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`hamburger-line top-line ${menuOpen ? 'open' : ''}`}
                d="M4 6h16"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`hamburger-line middle-line ${menuOpen ? 'open' : ''}`}
                d="M4 12h16"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`hamburger-line bottom-line ${menuOpen ? 'open' : ''}`}
                d="M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="navigation">
          <div className="mobile-menu-container">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`mobile-menu-item ${
                  activeSection === item.href ? 'active' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;