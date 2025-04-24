import React from 'react';
import { Leaf, Sparkles, Star } from 'lucide-react'; // Tu peux utiliser d'autres icônes végétales SVG ou FontAwesome

const offres = [
  {
    title: "Formule Découverte",
    icon: <Leaf size={28} color="#A4E86F" />,
    desc: "Une initiation douce à la végétalisation d'intérieur, avec un kit de plantes faciles et un accompagnement ponctuel.",
    points: ["🌱 3 plantes simples", "📦 Kit prêt-à-installer", "📅 Sans engagement"]
  },
  {
    title: "Nature Active",
    icon: <Sparkles size={28} color="#A4E86F" />,
    desc: "Un équilibre parfait entre design végétal et bien-être, pensé pour les bureaux actifs et les espaces de vie professionnels.",
    points: ["🌿 Jusqu'à 6 plantes", "🧼 Entretien mensuel inclus", "🎨 Design sur mesure"]
  },
  {
    title: "Premium Équilibre",
    icon: <Star size={28} color="#A4E86F" />,
    desc: "Une expérience végétale haut de gamme pour transformer vos espaces en véritables oasis, avec services intégrés.",
    points: ["🌴 Plantes haut de gamme", "🧑‍🎨 Accompagnement design biophilique", "🛠 Installation & maintenance régulière"]
  }
];

const ServicesOffres = () => {
  return (
    <section className="services-offres">
      <h2>Nos Offres</h2>
      <div className="offres-grid">
        {offres.map((offre, index) => (
          <div key={index} className="offre-card">
            <div className="offre-icon">{offre.icon}</div>
            <h3 className="offre-title">{offre.title}</h3>
            <p className="offre-desc">{offre.desc}</p>
            <ul className="offre-points">
              {offre.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffres;
