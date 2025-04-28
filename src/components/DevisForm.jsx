import React, { useState } from 'react';
import '../styles/DevisForm.css';

const DevisForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    formule: '',
    plantes: {},
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const plantesOptions = [
    { name: 'Ficus', price: 25 },
    { name: 'Pothos', price: 18 },
    { name: 'Areca', price: 30 },
    { name: 'Sansevieria', price: 22 }
  ];

  const formules = [
    { name: 'Découverte', price: 59 },
    { name: 'Nature Active', price: 99 },
    { name: 'Premium Équilibre', price: 149 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const updatePlantQty = (plant, delta) => {
    setFormData(prev => {
      const currentQty = prev.plantes[plant] || 0;
      const updatedQty = Math.max(0, currentQty + delta);
      return {
        ...prev,
        plantes: { ...prev.plantes, [plant]: updatedQty }
      };
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const formuleSelected = formules.find(f => f.name === formData.formule);
  const total =
    (formuleSelected?.price || 0) +
    Object.entries(formData.plantes).reduce((acc, [key, qty]) => {
      const plant = plantesOptions.find(p => p.name === key);
      return acc + (plant?.price || 0) * qty;
    }, 0);

  const showSidebar = formData.formule !== '' || Object.values(formData.plantes).some(qty => qty > 0);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="devis-page">
      <form className="devis-form">
        <h2>Obtenez votre devis</h2>

        <label>Nom</label>
        <input type="text" name="nom" required value={formData.nom} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />

        <label>Téléphone</label>
        <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} />

        <label>Formule</label>
        <select name="formule" required value={formData.formule} onChange={handleChange}>
          <option value="">-- Choisissez une formule --</option>
          {formules.map((f, idx) => (
            <option key={idx} value={f.name}>
              {f.name} - {f.price}€
            </option>
          ))}
        </select>

        <label>Plantes</label>
        <div className="plant-select">
          {plantesOptions.map((plant, idx) => (
            <div key={idx} className="plant-item">
              <span>{plant.name} - {plant.price}€</span>
              <div className="qty-controls">
                <button type="button" onClick={() => updatePlantQty(plant.name, -1)}>-</button>
                <span>{formData.plantes[plant.name] || 0}</span>
                <button type="button" onClick={() => updatePlantQty(plant.name, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </form>

      {showSidebar && (
        <>
          <aside className={`devis-sidebar ${sidebarOpen ? 'active' : ''}`}>
            <h3>Récapitulatif</h3>
            <p><strong>Nom :</strong> {formData.nom || '-'}</p>
            <p><strong>Email :</strong> {formData.email || '-'}</p>
            <p><strong>Téléphone :</strong> {formData.telephone || '-'}</p>
            <p><strong>Formule :</strong> {formData.formule || '-'}</p>
            <p><strong>Plantes :</strong></p>
            <ul>
              {Object.entries(formData.plantes).filter(([_, qty]) => qty > 0).length === 0 && (
                <li>Aucune plante sélectionnée</li>
              )}
              {Object.entries(formData.plantes).map(([name, qty]) =>
                qty > 0 && <li key={name}>{name} × {qty}</li>
              )}
            </ul>

            <p className="total"><strong>Total estimé :</strong> {total}€</p>

            <button
              type="button"
              className={`submit-btn ${loading ? 'loading' : ''}`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer le devis 🌿"}
            </button>

            {submitted && !loading && (
              <p className="confirmation">✅ Devis envoyé avec succès !</p>
            )}
          </aside>

          {/* ✅ Bouton toggle */}
          <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
            {sidebarOpen ? "Cacher le récap" : "Voir le récap"}
          </button>
        </>
      )}
    </div>
  );
};

export default DevisForm;
