import React from 'react';

/**
  *
  * Partial - pretty address
  *
  * @param {object} address
  *
  * @return string
  */

export default function (address) {
  return <span>{address.street}<br />{address.city}, {address.state} {address.zip}</span>;
}
