import React from 'react';
import '../styles/AccueilEngagements.css';

const engagements = [
  {
    title: 'Écoresponsabilité',
    icon: '🌿',
    desc: 'Utilisation de plantes locales, matériaux recyclés et zéro plastique.'
  },
  {
    title: 'Bien-être au travail',
    icon: '💼',
    desc: 'Des espaces apaisants favorisant la concentration et la sérénité.'
  },
  {
    title: 'Design végétal',
    icon: '🎨',
    desc: 'Des compositions naturelles et élégantes pensées sur mesure.'
  },
  {
    title: 'Suivi personnalisé',
    icon: '🤝',
    desc: 'Conseils, installation et entretien régulier pour un service complet.'
  }
];

const AccueilEngagements = () => {
  return (
    <section className="engagements-section">
      <h2 className="engagements-title">Nos engagements</h2>
      <div className="engagements-grid">
        {engagements.map((item, index) => (
          <div className="engagement-card" key={index}>
            <div className="engagement-icon">{item.icon}</div>
            <h3 className="engagement-card-title">{item.title}</h3>
            <p className="engagement-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccueilEngagements;
