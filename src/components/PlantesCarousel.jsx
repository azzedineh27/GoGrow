import React from 'react';
import '../styles/PlantesCarousel.css';

const images = [
  { src: '/plante1.jpg', label: "Ficus lyrata" },
  { src: '/plante2.jpg', label: "Pothos doré" },
  { src: '/plante3.jpg', label: "Monstera" },
  { src: '/plante4.jpg', label: "Sansevieria" },
  { src: '/plante5.jpg', label: "Areca palm" },
  { src: '/plante6.jpg', label: "Calathea" },
  { src: '/plante7.jpg', label: "Philodendron" },
  { src: '/plante8.jpg', label: "Chlorophytum" },
  { src: '/plante9.jpg', label: "Fougère de Boston" },
  { src: '/plante10.jpg', label: "Anthurium" },
];

const PlantesCarousel = () => {
  return (
    <section className="plantes-carousel">
      <h2 className="carousel-title">Nos plantes favorites</h2>
      <p className="carousel-subtitle">
        Une sélection de nos espèces les plus prisées pour transformer vos espaces de travail en oasis de verdure 🌿
      </p>
      <div className="carousel-wrapper" style={{ '--quantity': images.length }}>
        {images.map((item, index) => (
          <div key={index} className="carousel-item" style={{ '--position': index + 1 }}>
            <img src={item.src} alt={item.label} />
            <div className="plante-caption">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantesCarousel;
