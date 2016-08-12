import React from 'react';

import wedding from '../../../../../config/wedding.js';
import PageHeader from '../../_partials/page-header';

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
    <PageHeader page="Registry" />
    {registryLinks}
  </div>
);
