import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/ServicesHeader.css';

const ServicesHeader = () => {
  return (
    <header className="services-header">
      <div className="leaf-overlay" /> {/* arrière-plan feuilles animées */}

      <div className="services-header-content">
        <h1>Services végétalisés sur-mesure</h1>
        <p className="intro">
          Offrez à vos espaces professionnels une ambiance zen, naturelle et inspirante grâce à nos solutions biophiliques.
        </p>

        <div className="highlights">
          <div className="highlight-item">🌿 Design biophilique personnalisé</div>
          <div className="highlight-item">🧑‍🌾 Installation & entretien clé en main</div>
          <div className="highlight-item">🏢 Adapté aux bureaux, commerces et plus</div>
        </div>

        <div className="scroll-down">
          <p>Découvrir nos services</p>
          <ChevronDown className="scroll-icon" />
        </div>
      </div>
    </header>
  );
};

export default ServicesHeader;
