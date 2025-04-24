import React from 'react';
import '../styles/AccueilHeader.css';

const AccueilHeader = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Transformez votre espace <span className="highlight">naturellement</span>
        </h1>
        <p className="hero-subtitle">
          Créez un environnement de travail sain, élégant et vivant avec nos solutions végétales.
        </p>
        <a href="/devis" className="hero-button">
          🌿 Je veux végétaliser mon bureau
        </a>
      </div>
    </section>
  );
};

export default AccueilHeader;
