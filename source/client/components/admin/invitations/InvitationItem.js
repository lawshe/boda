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

export default ({ invitation }) => {
  const attending = invitation.processed && invitation.processed.attending
    ? invitation.processed.attending : 'N/A';

  return (
    <tr key={invitation.id}>
      <td>{returnedCheck(invitation)}</td>
      <td>{attending}</td>
      <td><GuestList guests={invitation.guests} /></td>
      <td>{invitation.shortName}</td>
      <td>{invitation.plus.allowed}</td>
      <td>{invitation.plus.bringing}</td>
      <td><Link to={`/admin/invitations/edit/${invitation.id}`}>Edit</Link></td>
      <td><Link to={`/rsvp/${invitation.shortName}`}>RSVP</Link></td>
    </tr>
  );
};
