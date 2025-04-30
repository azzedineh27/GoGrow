import React from 'react';
import '../styles/Contact.css';
import FormulaireContact from '../components/FormulaireContact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="wind-leaves">
        <span className="leaf leaf-1" />
        <span className="leaf leaf-2" />
        <span className="leaf leaf-3" />
        <span className="leaf leaf-4" />
        <span className="leaf leaf-5" />
        <span className="leaf leaf-5" />
      </div>

      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Une idée, un projet, une envie de verdure ? Écrivez-nous 🌿</p>
      </div>

      <FormulaireContact />
    </div>
  );
};

export default ContactPage;
