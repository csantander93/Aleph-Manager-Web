import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import logo from '../../assets/LOGO ALEPH FIJO v02.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detectar sección activa
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(`#${section.id}`);
        }
      });
    };
    
    document.documentElement.classList.add('dark');
    document.documentElement.style.setProperty('--bg-color', '#0A0A0A');
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      // Forzar re-renderizado de los componentes
      window.location.reload();
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
      <div className="header-container">
        {/* Logo clickable */}
        <div className="flex items-center">
          <a href="#inicio" className="cursor-pointer" aria-label={t('header.ariaLabels.logo')}>
            <img 
              src={logo} 
              alt={t('header.logoAlt')} 
              className="header-logo"
            />
          </a>
        </div>

        {/* Menú desktop */}
        <nav className="nav-desktop" aria-label={t('header.ariaLabels.navigation')}>
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={`nav-item ${isScrolled ? 'nav-item-scrolled' : 'nav-item-transparent'} ${
                activeSection === item.href ? 'text-cyan-300' : ''
              }`}
            >
              {item.name}
              <span className={`nav-underline ${
                activeSection === item.href ? 'w-full' : ''
              }`}></span>
            </a>
          ))}
          
          {/* Botón de cambio de idioma */}
          <button 
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="language-switcher"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        {/* Contenedor para elementos móviles (idioma y menú) */}
        <div className="mobile-elements-container">
          {/* Botón de cambio de idioma en móvil */}
          <button 
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="mobile-language-button"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón del menú hamburguesa */}
          <button
            aria-label={menuOpen ? t('header.ariaLabels.menuClose') : t('header.ariaLabels.menuToggle')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`mobile-menu-button ${isScrolled ? 'mobile-menu-button-scrolled' : 'mobile-menu-button-transparent'}`}
          >
            <svg className="mobile-menu-icon" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="mobile-menu" role="navigation">
          <div className="mobile-menu-container">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`mobile-menu-item ${
                  activeSection === item.href ? 'text-cyan-300' : ''
                }`}
                onClick={() => setMenuOpen(false)}
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