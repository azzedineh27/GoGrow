// ServicesTypes.jsx
import React from 'react';

const interventions = [
  { label: "Bureaux & open spaces", image: "/types/bureaux.jpg" },
  { label: "Espaces d’accueil", image: "/types/accueil.jpg" },
  { label: "Commerces & restaurants", image: "/types/commerces.jpg" },
  { label: "Salles de réunion", image: "/types/reunion.jpg" },
];

const ServicesTypes = () => {
  return (
    <section className="services-types">
      <h2>Types d'interventions</h2>
      <div className="types-grid">
        {interventions.map((item, index) => (
          <div className="type-card" key={index}>
            <div
              className="type-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="type-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTypes;
