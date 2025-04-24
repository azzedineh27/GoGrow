import React from 'react';
import '../styles/Contact.css';
import FormulaireContact from '../components/FormulaireContact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="leaf-animation" />
      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Une idée, un projet, une envie de verdure ? Écrivez-nous 🌿</p>
      </div>
      <FormulaireContact />
    </div>
  );
};

export default ContactPage;
