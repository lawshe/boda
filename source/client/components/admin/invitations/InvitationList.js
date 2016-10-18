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

const InvitationList = (props) => (
  <div>
    <h1>Invitations</h1>
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
);

export default subscribe({
  mapDataToProps
})(InvitationList);
