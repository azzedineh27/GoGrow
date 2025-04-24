import React from 'react';

import ServicesHeader from '../components/ServicesHeader';
import ServicesOffres from '../components/ServicesOffres';
import ServicesTypes from '../components/ServicesTypes';
import ServicesProcessus from '../components/ServicesProcessus';
import PlantesCarousel from '../components/PlantesCarousel';

import '../styles/ServicesHeader.css';
import '../styles/ServicesOffres.css';
import '../styles/ServicesTypes.css';
import '../styles/ServicesProcessus.css';
import '../styles/PlantesCarousel.css';

const Services = () => {
  return (
    <main>
      <ServicesHeader />
      <ServicesOffres />
      <ServicesTypes />
      <ServicesProcessus />
      <PlantesCarousel/>
    </main>
  );
};

export default Services;
