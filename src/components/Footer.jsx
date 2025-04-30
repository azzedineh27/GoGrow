import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section logo-section">
          <img src="/logo_ggg.png" alt="Logo GGG" className="footer-logo" />
          <p className="footer-description">
            Végétalisez vos espaces de la meilleure des façons avec <strong>GoGrow</strong> !
          </p>
          <div className="footer-socials">
            <a href="#"><img src="/insta.webp" alt="Instagram" /></a>
            <a href="#"><img src="/snap.webp" alt="Snapchat" /></a>
            <a href="#"><img src="/linkedin.webp" alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <ul>
            <li><a href="/contact">Formulaire de contact</a></li>
            <li><a href="mailto:contact@gogrow.com">contact@gogrow.com</a></li>
            <li><a href="/devis">Demander un devis</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>À propos</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/qsn">Qui sommes-nous</a></li>
            <li><a href="/services">Nos services</a></li>
            <li><a href="/#engagements">Nos engagements</a></li>
            <li><a href="/#avis">Avis clients</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Mentions légales</h3>
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/politique-cookies">Politique de cookies</a></li>
            <li><a href="/rgpd">Politique de confidentialité (RGPD)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-credits">
        © 2025 <strong>GoGrow</strong>. Tous droits réservés.<br />
        <span className="redinweb-link">
          Réalisé avec <span className="heart">❤</span> par <a href="https://redinweb.fr" target="_blank" rel="noopener noreferrer">RedinWeb</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
