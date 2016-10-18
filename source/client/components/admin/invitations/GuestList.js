import React from 'react';
// import PersonName from '../../_partials/person-name';
import fxns from '../../../../utils/fxns';

/**
  *
  * The guests in a single invitation
  *
  * @param  {Object} guests - An array of guest objects
  *
  * @return {ReactComponent}
  */

const GuestList = (props) => (
  <ul>
    {props.guests.map(
      (guest, i) => {
        const personName = fxns.personFullName(guest);
        return (
          <li key={i}>
            {personName}
          </li>
        );
      }
    )}
  </ul>
);

export default GuestList;
