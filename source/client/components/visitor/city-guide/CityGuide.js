import React from 'react';

import wedding from '../../../../../config/wedding.js';

import PageHeader from '../../_partials/page-header';
import prettyAddress from '../../_partials/pretty-address';
import borderCorner from '../../../svg/border-corner.js';
import borderHorizontal from '../../../svg/border-horizontal.js';

/**
  *
  * The City Guide page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

export default () => {
  const accommodationsAddress = prettyAddress(wedding.accommodations.address);
  return (
    <div className="page-details">
      <PageHeader page="City Guide" />

      <h2>Accommodations</h2>
      <h3>{wedding.accommodations.name}</h3>
      <h4>{accommodationsAddress}</h4>
    </div>
  );
};
