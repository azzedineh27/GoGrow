// QSNWhyUs.jsx
import React from 'react';
import "../styles/QSNWhyUs.css";
import { Leaf } from "lucide-react"; // bonus pour une icône, si installée

const stats = [
  { value: "100+", label: "espaces végétalisés" },
  { value: "98%", label: "de satisfaction client" },
  { value: "10j", label: "moyenne d’installation" },
  { value: "100%", label: "plantes sélectionnées éco-responsables" },
];

const QSNWhyUs = () => {
  return (
    <section className="qsn-whyus">
      <h2>Pourquoi nous choisir ?</h2>
      <div className="whyus-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-capsule">
            <div className="capsule-icon">
              <Leaf size={24} strokeWidth={2} />
            </div>
            <div className="capsule-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QSNWhyUs;
