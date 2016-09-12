import React from 'react';
// import { Link } from 'react-router';

import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';

/**
  *
  * The footer for visitor layout
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

const today = new Date();
const bigDay = new Date(wedding.date);

let countdown = '';
// Todo: past day
if (today.toDateString() === bigDay.toDateString()) {
  countdown = 'TODAY IS THE DAY!';
} else {
  countdown = `Just ${numberOfDaysUntil()} More Days!`;
}


export default () => (
  <div className={`${local.footer} ${glob.verticalContainer}`}>
    <h3 className={`${glob.verticallyAligned}`}>{countdown}</h3>
  </div>
);
