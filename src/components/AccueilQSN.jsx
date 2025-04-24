import React from 'react';
import '../styles/AccueilQSN.css';

const AccueilQSN = () => {
  return (
    <section className="qsn-section">
      <div className="qsn-container">
        <div className="qsn-textbox">
          <h2 className="qsn-title">Notre vision 🌿</h2>
          <p className="qsn-desc">
            Chez <strong>IDRYMEN</strong>, nous façonnons des espaces de travail
            où la nature s’intègre parfaitement à l’architecture.
            La végétalisation est pour nous une réponse à la recherche de bien-être,
            de respiration et d’harmonie dans les lieux professionnels.
          </p>
          <ul className="qsn-highlights">
            <li>🌱 Design biophilique personnalisé</li>
            <li>🌞 Ambiance zen & éclairage naturel</li>
            <li>🧼 Installation propre, entretien simplifié</li>
          </ul>
        </div>

        <div className="qsn-image-container">
          <img src="/img_qsn.jpg" alt="Plantes dans bureau" />
        </div>
      </div>
    </section>
  );
};

export default AccueilQSN;
