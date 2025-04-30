import React from 'react';
import '../styles/QSNTimeline.css';
import { Sprout, TreePalm, Flower2, HandPlatter } from 'lucide-react';

const timeline = [
  {
    icon: <Sprout size={24} />,
    year: '2023',
    title: 'Naissance',
    desc: 'Création de GoGrow, portée par une passion pour la nature.',
  },
  {
    icon: <TreePalm size={24} />,
    year: '2024',
    title: 'Premiers projets',
    desc: 'Nos premiers murs végétaux voient le jour.',
  },
  {
    icon: <Flower2 size={24} />,
    year: '2025',
    title: 'Croissance verte',
    desc: 'Une communauté d’entreprises verdies grandissante.',
  },
  {
    icon: <HandPlatter size={24} />,
    year: 'Aujourd’hui',
    title: 'Engagement durable',
    desc: 'Chaque jour, nous végétalisons avec éthique et amour.',
  },
];

const QSNTimeline = () => {
  return (
    <section className="qsn-timeline-section">
      <h2 className="timeline-title">Notre Histoire</h2>
      <div className="timeline-container">
        <div className="timeline-line" />
        {timeline.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="leaf-icon">{item.icon}</div>
            <div className="timeline-card">
              <h3>{item.year} — {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QSNTimeline;
