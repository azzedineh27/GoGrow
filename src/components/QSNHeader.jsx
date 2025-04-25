// src/components/QSNHeader.jsx
import React from 'react';
import '../styles/QSNHeader.css';
import { ChevronDown } from 'lucide-react';

const QSNHeader = () => {
  return (
    <header className="qsn-header">
      {/* Fond SVG animé */}
      <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="greenGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#bfffd4" />
            <stop offset="100%" stopColor="#a4e86f" />
          </linearGradient>
        </defs>
        <path
          d="M0,160 C480,320 960,0 1440,160 L1440,800 L0,800 Z"
          fill="url(#greenGradient)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,160 C480,320 960,0 1440,160 L1440,800 L0,800 Z;
              M0,120 C480,280 960,40 1440,180 L1440,800 L0,800 Z;
              M0,200 C480,260 960,80 1440,140 L1440,800 L0,800 Z;
              M0,160 C480,320 960,0 1440,160 L1440,800 L0,800 Z"
          />
        </path>
      </svg>

      {/* Contenu */}
      <div className="qsn-header-content">
        <h1>Qui sommes-nous</h1>
        <p>
          Une passion pour le végétal, une mission : réintroduire la nature dans les lieux de vie professionnelle 🌱
        </p>
        <a href="#qsn-timeline">Découvrir notre histoire</a>
      </div>

      {/* Flèche animée */}
      <div className="scroll-down-indicator">
        <ChevronDown size={36} />
      </div>
    </header>
  );
};

export default QSNHeader;
