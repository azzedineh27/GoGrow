import React, { useState } from 'react';
import '../styles/AccueilFAQ.css';

const faqData = [
  {
    question: 'Quels types de plantes utilisez-vous ?',
    answer:
      'Nous utilisons des plantes adaptées aux environnements intérieurs, sélectionnées pour leur robustesse et leur esthétique.',
  },
  {
    question: 'Proposez-vous un service d’entretien ?',
    answer:
      'Oui, nous proposons des offres d’entretien régulier pour que vos plantes restent en parfaite santé.',
  },
  {
    question: 'Intervenez-vous partout en France ?',
    answer:
      'Pour l’instant, nous intervenons principalement en Île-de-France, mais contactez-nous pour vérifier !',
  },
  {
    question: 'Intervenez-vous partout en France ?',
    answer:
      'Pour l’instant, nous intervenons principalement en Île-de-France, mais contactez-nous pour vérifier !',
  }
];

const AccueilFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Questions fréquentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question-container">
              <div className="faq-question">{item.question}</div>
              <div className={`faq-arrow ${openIndex === index ? 'rotated' : ''}`}>▼</div>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccueilFAQ;
