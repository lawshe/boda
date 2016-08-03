import React from 'react';
import glob from 'styles/app';

/**
  *
  * If invitation not found
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const notFound = () => (
  <div className={`${glob.fourOhFour}`}>
    <h2>Invite Not Found</h2>
  </div>
);

export default notFound;
