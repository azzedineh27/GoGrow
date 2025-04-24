import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo_idrymen.webp" alt="Logo Idrymen" className="navbar-logo" />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`navbar-center ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-link">Accueil</a>
        <a href="/qsn" className="nav-link">A propos</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/devis" className="nav-link">Devis</a>
      </div>

      <div className="navbar-right">
        <button className="lang-button">FR ▾</button>
      </div>
    </nav>
  );
};

export default Navbar;
