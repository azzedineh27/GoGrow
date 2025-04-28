// src/components/ServicesInterventions.jsx
import React from 'react';
import { Building2, DoorOpen, Store, Users, Trees } from 'lucide-react';
import '../styles/ServicesInterventions.css';

const interventions = [
  { label: "Bureaux & Open Spaces", icon: <Building2 size={24} />, image: "/bureau.jpg" },
  { label: "Commerces & Restaurants", icon: <Store size={24} />, image: "/boutiques.jpg" },
  { label: "Salles de Réunion", icon: <Users size={24} />, image: "/reunion.jpg" },
  { label: "Terrasses & Espaces Extérieurs", icon: <Trees size={24} />, image: "/terrasse.jpg" },
];

const ServicesInterventions = () => {
  return (
    <section className="services-interventions">
      <h2>Où intervenons-nous ?</h2>
      <div className="slider-wrapper">
        {interventions.map((item, index) => (
          <div className="slider-card" key={index}>
            <div
              className="slider-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="slider-label">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesInterventions;
