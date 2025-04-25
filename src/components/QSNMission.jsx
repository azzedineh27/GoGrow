// QSNMission.jsx
import React from 'react';
import "../styles/QSNMission.css";

const QSNMission = () => {
  return (
    <section className="qsn-mission">
      <h2>Notre mission</h2>
      <p>
        Reconnecter les espaces de travail à la nature. 🌿 Chez Idrymen, nous croyons que le végétal est plus qu’un décor : c’est un moteur de bien-être, d’inspiration et de productivité.
      </p>
      <div className="mission-pillars">
        <div className="pillar">
          <h3>🌿 Nature</h3>
          <p>Intégrer le vivant dans vos espaces avec esthétique et équilibre.</p>
        </div>
        <div className="pillar">
          <h3>💼 Bien-être au travail</h3>
          <p>Offrir un environnement plus apaisant, stimulant et sain.</p>
        </div>
        <div className="pillar">
          <h3>♻️ Engagement durable</h3>
          <p>Des choix responsables et durables, du design à l’entretien.</p>
        </div>
      </div>
    </section>
  );
};

export default QSNMission;
