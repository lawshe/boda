import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col, Table } from 'react-bootstrap';

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

const InvitationList = (props) => (
  <Row>
    <h2>All Invitations</h2>
    <Col md={12}>
      <Table>
        <thead>
          <tr>
            <th>Returned RSVP?</th>
            <th>Guests</th>
            <th>Plus Allowed</th>
            <th>Plus Bringing</th>
            <th>&nbsp;</th>
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
    </Col>
  </Row>
);

export default subscribe({
  mapDataToProps
})(InvitationList);
