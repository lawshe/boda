// import React from 'react';
//
// /**
//   *
//   * Partial - Person name
//   *
//   * @param {Object} guest - The guest data
//   * @param {Object} guest.name - The guest name data
//   * @param {Object} guest.name.first - The guest first name
//   * @param {Object} guest.name.last - The guest last name
//   *
//   * @return {ReactComponent}
//   */
//
// export default (props) => {
//   let fullName = '';
//
//   if (props.guest.name.first) {
//     fullName += props.guest.name.first;
//   }
//
//   if (props.guest.name.first && props.guest.name.last) {
//     fullName += ' ';
//   }
//
//   if (props.guest.name.last) {
//     fullName += props.guest.name.last;
//   }
//
//   return (
//     <span className="personName">{fullName}</span>
//   );
// };
