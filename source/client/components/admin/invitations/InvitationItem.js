import React from 'react';
import { Link } from 'react-router';

import GuestList from './GuestList';

/**
  *
  * A single invitation
  *
  * Includes no actions
  *
  * @param {Object} invitation - The invitation data
  *
  * @return {ReactComponent}
  */

const returnedCheck = (invitation) => {
  let returned = 'No';
  if (invitation.returned) {
    returned = 'Yes';
  }
  return returned;
};

export default ({ invitation }) => (
  <tr key={invitation.id}>
    <td>{returnedCheck(invitation)}</td>
    <td><GuestList guests={invitation.guests} /></td>
    <td>{invitation.plus.allowed}</td>
    <td>{invitation.plus.bringing}</td>
    <td><Link to={`/rsvp/${invitation.shortName}`}>RSVP</Link></td>
  </tr>
);
