import React from 'react';

import wedding from '../../../../../config/wedding.js';

import Map from './map';

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

export default (props) => {
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
      <h2><i className="fa fa-bell-o" ariaHidden="true"></i> Day of</h2>
      <h3><PrettyDate /></h3>
      <h3>{wedding.venue.name}</h3>
      <p>{wedding.venue.address.street}</p>
      <p>{wedding.venue.address.city}, {wedding.venue.address.state}</p>
      <p>{countdown}</p>
      <Map />
    </div>
  );
};
