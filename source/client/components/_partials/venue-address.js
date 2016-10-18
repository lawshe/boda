import React from 'react';
import wedding from '../../../../config/wedding.js';

/**
  *
  * Partial - pretty venue address
  *
  * @param none
  *
  * @return react component
  */

export default () => {
  const address = wedding.venue.address;
  return (
    <span>
      {address.street}
      <br />
      {address.city}, {address.state} {address.zip}
    </span>
  );
};
