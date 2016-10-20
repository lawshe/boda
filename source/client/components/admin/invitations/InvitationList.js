import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import Well from 'react-bootstrap/lib/Well';
import InvitationItem from './InvitationItem';

/**
  *
  * A list of all invitations
  *
  * @param  {Object} horizon - horizon The horizon object
  *
  * @return {ReactComponent}
  */

const mapDataToProps = {
  invitations: (hz) => hz('invitations')
};

const InvitationList = (props) => {
  let totalAttending = 0;
  let totalReturned = 0;
  let totalInvites = 0;
  let totalInvitedPeople = 0;

  if (props.invitations) {
    totalInvites = props.invitations.length;

    props.invitations.forEach((i) => {
      // Attending
      if (i.processed && i.processed.attending) {
        totalAttending = totalAttending + i.processed.attending;
      }

      // Returned RSVPs
      if (i.returned) {
        totalReturned++;
      }

      // Total Invited
      if (i.guests) {
        totalInvitedPeople = totalInvitedPeople + i.guests.length;
      }

      if (i.plus && i.plus.allowed) {
        totalInvitedPeople = totalInvitedPeople + i.plus.allowed;
      }
    });
  }

  return (
    <div>
      <h1 style={{ marginBottom: '0px' }}>Invitations</h1>
      <h3><u>Returned RSVPs</u>: {totalReturned} of {totalInvites}</h3>
      <h3><u>Total Attending</u>: {totalAttending} of {totalInvitedPeople}</h3>
      <Row>
        <Col md={12}>
          <Well>
            <Table>
              <thead>
                <tr>
                  <th>Returned RSVP?</th>
                  <th>Total Attending</th>
                  <th>Guests</th>
                  <th>Short Name</th>
                  <th>Plus Allowed</th>
                  <th>Plus Bringing</th>
                  <th>Admin</th>
                  <th>Visitor</th>
                </tr>
              </thead>
              <tbody>
              {props.invitations.map(
                invitation => (
                  <InvitationItem
                    key={invitation.id}
                    invitation={invitation}
                  />
                )
              )}
              </tbody>
            </Table>
          </Well>
        </Col>
      </Row>
    </div>
) ;
};

export default subscribe({
  mapDataToProps
})(InvitationList);
