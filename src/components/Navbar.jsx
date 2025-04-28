import React, { useState } from 'react';
import '../styles/navbar.css';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleLangMenu = () => {
    setIsLangOpen(prev => !prev);
  };

  const selectLang = (lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
    // ici tu peux rajouter de la logique pour changer la langue du site si besoin
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo_idrymen.webp" alt="Logo Idrymen" className="navbar-logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <Menu />
      </div>

      <div className={`navbar-center ${isOpen ? 'active' : ''}`}>
        <a href="/" className="nav-link">Accueil</a>
        <a href="/qsn" className="nav-link">A propos</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/devis" className="nav-link">Devis</a>
      </div>

      <div className="navbar-right">
        <div className="lang-menu">
          <button className="lang-button" onClick={toggleLangMenu}>
            {currentLang} <ChevronDown size={18} style={{ marginLeft: 6 }} />
          </button>
          {isLangOpen && (
            <div className="lang-dropdown">
              <div onClick={() => selectLang('FR')}>Français</div>
              <div onClick={() => selectLang('EN')}>English</div>
              <div onClick={() => selectLang('ES')}>Español</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
