import React from 'react';

import AccueilHeader from '../components/AccueilHeader';
import AccueilQSN from '../components/AccueilQSN';
import AccueilEngagements from '../components/AccueilEngagements';
import AccueilAvis from '../components/AccueilAvis';
import AccueilFAQ from '../components/AccueilFAQ';
import BoutonCTA from '../components/BoutonCTA';

import '../styles/Accueil.css';
import '../styles/AccueilHeader.css';
import '../styles/AccueilQSN.css';
import '../styles/AccueilEngagements.css';
import '../styles/AccueilAvis.css';
import '../styles/AccueilFAQ.css';
import '../styles/BoutonCTA.css';

const Accueil = () => {
  return (
    <main>
      <AccueilHeader />
      <AccueilQSN />
      <AccueilEngagements/>
      <BoutonCTA />
      <div className="section-linear">
        <AccueilFAQ/>
        <AccueilAvis/>
      </div>
      
    </main>
  );
};

export default Accueil;
