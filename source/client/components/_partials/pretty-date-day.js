import React from 'react';

import wedding from '../../../../config/wedding.js';

/**
  *
  * Partial - pretty day of week of wedding
  *
  * @param none
  *
  * @return react component
  */

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export default function () {
  const weddingDate = new Date(wedding.date);
  const weddingDay = weddingDate.getDay();
  return (
    <span>{days[weddingDay]}</span>
  );
}
