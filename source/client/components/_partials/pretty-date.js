import React from 'react';

/**
  *
  * Partial - Pretty date
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const getGetOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v-20) % 10] || s[v] || s[0]);
};

export default (props) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dateDate = new Date(props.date);
  const dateDateDay = getGetOrdinal(dateDate.getDate());
  const dateDateMonth = monthNames[dateDate.getMonth()];
  const dateDateYear = dateDate.getFullYear().toString();

  const prettyDate = `${dateDateMonth} ${dateDateDay} ${dateDateYear}`;
  return (
    <span>{prettyDate}</span>
  );
};
