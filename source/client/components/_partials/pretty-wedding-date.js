import React from 'react';

import wedding from '../../../../config/wedding.js';

/**
  *
  * Partial - Wedding date
  *
  * @param none
  *
  * @return {ReactComponent}
  */

export default () => {
  const weddingDate = new Date(wedding.date);
  const weddingDay = weddingDate.getDate();
  const weddingMonth = parseInt(weddingDate.getMonth() + 1, 10);
  const weddingYear = weddingDate.getFullYear().toString().slice(-2);
  return (
    <span>{weddingMonth}&middot;{weddingDay}&middot;{weddingYear}</span>
  );
};
