import { useState, useEffect } from "react";
import logo from '../../assets/LOGO ALEPH FIJO v02.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

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

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Soluciones de software", href: "#soluciones" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contáctanos", href: "#contacto" }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-container">
        {/* Logo clickable */}
        <div className="flex items-center">
          <a href="#inicio" className="cursor-pointer" aria-label="Ir al inicio">
            <img 
              src={logo} 
              alt="Aleph Manager - Software especializado en gestión ISO, GRC y PLAFT" 
              className="header-logo"
            />
          </a>
        </div>

        {/* Menú desktop */}
        <nav className="nav-desktop" aria-label="Navegación principal">
          {menuItems.map((item) => (
            <a
              key={item.name}
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
        </nav>

        {/* Menú móvil */}
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`mobile-menu-button ${isScrolled ? 'mobile-menu-button-scrolled' : 'mobile-menu-button-transparent'}`}
        >
          <svg className="mobile-menu-icon" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="mobile-menu" role="navigation">
          <div className="mobile-menu-container">
            {menuItems.map((item) => (
              <a
                key={item.name}
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