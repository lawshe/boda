import React from 'react';

import PersonName from '../../_partials/person-name';

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
      (guest, i) => (
        <li key={i}>
          <PersonName guest={guest} />
        </li>
      )
    )}
  </ul>
);

export default GuestList;
