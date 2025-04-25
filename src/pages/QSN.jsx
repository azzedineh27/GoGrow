import React from 'react';
import QSNMission from '../components/QSNMission';
import QSNTimeline from '../components/QSNTimeline';
import QSNWhyUs from '../components/QSNWhyUs';

const QSN = () => {
  return (
    <div className="qsn-page">
      <QSNMission />
      <QSNTimeline />
      <QSNWhyUs />
    </div>
  );
};

export default QSN;
