import React from 'react';
import "../styles/ServicesProcessus.css";

const steps = [
  {
    title: "1. Prise de contact",
    desc: "Nous échangeons sur vos besoins et contraintes.",
    img: "/appel_devis.jpg"
  },
  {
    title: "2. Conception sur mesure",
    desc: "Nous proposons un aménagement végétal adapté à vos espaces.",
    img: "/amenagement.jpg"
  },
  {
    title: "3. Installation",
    desc: "Nos équipes installent les plantes avec soin et esthétique.",
    img: "/installation.jpg"
  },
  {
    title: "4. Entretien",
    desc: "Nous assurons le suivi, l’arrosage et la santé de vos plantes.",
    img: "/entretien.png"
  }
];

const ServicesProcessus = () => {
  return (
    <section className="services-processus">
  <h2>Notre processus</h2>
  <div className="processus-steps">
    {steps.map((step, index) => (
      <div key={index} className="processus-card">
        <div className="step-badge">{index + 1}</div> {/* Bulle numéro */}
        <div className="processus-step">
          <div className="process-img-wrapper">
            <img src={step.img} alt={step.title} />
          </div>
          <div className="process-content">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default ServicesProcessus;
