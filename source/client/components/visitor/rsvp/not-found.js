import React from 'react';
import glob from 'styles/app';

import wedding from '../../../../../config/wedding';

/**
  *
  * If invitation not found
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const supportEmail = <a href={`mailto:${wedding.email}?Subject=RSVP Not found`}>{wedding.email}</a>;

const notFound = () => (
  <div className={`${glob.fourOhFour}`}>
    <h2>Invitation not found</h2>
    <h4>Email {supportEmail} for support.</h4>
  </div>
);

export default notFound;
