import React from 'react';
import "../styles/QSNMission.css";

const QSNMission = () => {
  return (
    <section className="qsn-mission">
      <div className="qsn-mission-wrapper">
        {/* Texte à gauche */}
        <div className="mission-text">
          <h2>Notre mission</h2>
          <p>
            Chez <strong>GoGrow</strong>, nous croyons que les plantes ne sont pas un simple décor, mais un véritable levier de transformation des espaces de travail.
          </p>
          <p>
            🌱 Nous nous engageons à réintroduire la nature dans vos environnements professionnels, avec sens, élégance et responsabilité.
          </p>
          <p>
            Notre mission : créer des lieux qui respirent, inspirent et régénèrent, au service de votre bien-être et de celui de la planète.
          </p>
        </div>

        {/* Image à droite */}
        <div className="mission-image">
          <img src="/appel_devis.jpg" alt="Végétalisation GoGrow" />
        </div>
      </div>
    </section>
  );
};

export default QSNMission;
