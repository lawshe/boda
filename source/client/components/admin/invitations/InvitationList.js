import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col, Table, Well } from 'react-bootstrap';

import PageHeader from '../../_partials/page-header';
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
    <PageHeader page="Add Invitation" />
    <Row>
      <Col md={12}>
        <Well>
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
        </Well>
      </Col>
    </Row>
  </div>
);

export default subscribe({
  mapDataToProps
})(InvitationList);
