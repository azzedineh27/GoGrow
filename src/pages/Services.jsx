import React from 'react';

import ServicesHeader from '../components/ServicesHeader';
import ServicesOffres from '../components/ServicesOffres';
import ServicesTypes from '../components/ServicesTypes';
import ServicesProcessus from '../components/ServicesProcessus';

import '../styles/ServicesHeader.css';
import '../styles/ServicesOffres.css';
import '../styles/ServicesTypes.css';
import '../styles/ServicesProcessus.css';

const Services = () => {
  return (
    <main>
      <ServicesHeader />
      <ServicesOffres />
      <ServicesTypes />
      <ServicesProcessus />
    </main>
  );
};

export default Services;
