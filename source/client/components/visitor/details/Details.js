import React from 'react';

import wedding from '../../../../../config/wedding.js';

import PageHeader from '../../_partials/page-header';
import PrettyDate from '../../_partials/pretty-date.js';

/**
  *
  * The details page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const numberOfDaysUntil = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const weddingDate = new Date(wedding.date);
  const today = new Date();
  return Math.round(Math.abs((today.getTime() - weddingDate.getTime()) / (oneDay)));
};

export default () => {
  const today = new Date();
  const bigDay = new Date(wedding.date);

  let countdown = '';

  if (today.toDateString() === bigDay.toDateString()) {
    countdown = 'TODAY IS THE DAY!';
  } else {
    countdown = `${numberOfDaysUntil()}  Days until the wedding!`;
  }

  return (
    <div className="page-details">
      <PageHeader page="Details" />
      <h2><PrettyDate /></h2>
      <p>{countdown}</p>
      <h3>{wedding.venue.address.city}, {wedding.venue.address.state}</h3>
      <h4>{wedding.venue.name}</h4>
      <p>{wedding.venue.address.street}</p>

    </div>
  );
};
