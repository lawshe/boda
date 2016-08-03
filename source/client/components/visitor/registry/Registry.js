import React from 'react';

import wedding from '../../../../../config/wedding.js';

/**
  *
  * The registry page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const registryLinks = wedding.registry.map(
  reg => (<h2><a href={reg.link} target="_BLANK">{reg.name}</a></h2>)
);

export default () => (
  <div>
    <h1>Registry</h1>
    {registryLinks}
  </div>
);
