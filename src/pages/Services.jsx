import React from 'react';

import ServicesHeader from '../components/ServicesHeader';
import ServicesOffres from '../components/ServicesOffres';
import ServicesProcessus from '../components/ServicesProcessus';
import PlantesCarousel from '../components/PlantesCarousel';
import ServicesInterventions from '../components/ServicesInterventions';

import '../styles/ServicesHeader.css';
import '../styles/ServicesOffres.css';
import '../styles/ServicesProcessus.css';
import '../styles/PlantesCarousel.css';
import '../styles/ServicesInterventions.css';

const Services = () => {
  return (
    <main>
      <ServicesHeader />
      <ServicesOffres />
      <PlantesCarousel/>
      <ServicesProcessus />
      <ServicesInterventions />
    </main>
  );
};

export default Services;
