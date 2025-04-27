import React from 'react';
import { Building2, Landmark, Store, Presentation } from 'lucide-react';
import '../styles/ServicesTypes.css';

const interventions = [
  { label: "Bureaux & open spaces", image: "/types/bureaux.jpg", icon: <Building2 size={32} color="#A4E86F" /> },
  { label: "Espaces d’accueil", image: "/types/accueil.jpg", icon: <Landmark size={32} color="#A4E86F" /> },
  { label: "Commerces & restaurants", image: "/types/commerces.jpg", icon: <Store size={32} color="#A4E86F" /> },
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
            <div className="type-label">
              {item.icon}
              <div>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTypes;
