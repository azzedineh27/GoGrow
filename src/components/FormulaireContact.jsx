import React, { useState } from 'react';

const FormulaireContact = () => {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire envoyé !');
    // Tu peux relier à EmailJS, API, etc.
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nom</label>
        <input type="text" name="nom" value={form.nom} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Téléphone</label>
        <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-btn">Envoyer 🌱</button>
    </form>
  );
};

export default FormulaireContact;
