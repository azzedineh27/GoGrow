import React from 'react';
import QSNHeader from '../components/QSNHeader';
import QSNMission from '../components/QSNMission';
import QSNTimeline from '../components/QSNTimeline';
import QSNWhyUs from '../components/QSNWhyUs';

const QSN = () => {
  return (
    <div className="qsn-page">
      <QSNHeader />
      <QSNMission />
      <QSNTimeline />
      <QSNWhyUs />
    </div>
  );
};

export default QSN;
