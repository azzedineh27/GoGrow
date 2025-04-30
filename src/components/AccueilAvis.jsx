import React from 'react';
import '../styles/AccueilAvis.css';

const avisList = [
  {
    name: 'Sophie B.',
    note: 5,
    comment: 'L’équipe GoGrow a transformé nos bureaux ! C’est apaisant et super bien intégré.'
  },
  {
    name: 'Thomas L.',
    note: 4,
    comment: 'Service client réactif, plantes de qualité. Je recommande !'
  },
  {
    name: 'Julie R.',
    note: 5,
    comment: 'Nos collaborateurs adorent l’ambiance végétale. Merci à toute l’équipe.'
  }
];

const AccueilAvis = () => {
  return (
    <section className="avis-section">
      <h2 className="avis-title">Ils nous font confiance</h2>
      <div className="avis-grid">
        {avisList.map((avis, index) => (
          <div className="avis-card" key={index}>
            <div className="avis-stars">{'⭐'.repeat(avis.note)}</div>
            <p className="avis-comment">"{avis.comment}"</p>
            <div className="avis-author">– {avis.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccueilAvis;
