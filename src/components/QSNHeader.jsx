import React from 'react';
import '../styles/QSNHeader.css';
import { ChevronDown } from 'lucide-react';

const QSNHeader = () => {
  return (
    <header className="qsn-header">
      {/* Halos doux */}
      <div className="halo halo1" />
      <div className="halo halo2" />
      <div className="halo halo3" />

      {/* Contenu */}
      <div className="qsn-header-content">
        <h1>Qui sommes-nous ?</h1>
        <p>
          Une passion pour le végétal.<br />Une mission : reconnecter vos espaces de vie à la nature 🌱
        </p>
        <a href="#qsn-timeline" className="discover-btn">
          Explorer notre histoire
        </a>
      </div>

      {/* Flèche descendante animée */}
      <div className="scroll-down-indicator">
        <ChevronDown className="chevron-icon" size={38} />
      </div>
    </header>
  );
};

export default QSNHeader;
