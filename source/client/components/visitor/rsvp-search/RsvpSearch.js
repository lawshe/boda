import React from 'react';
import { Link } from 'react-router';
import { subscribe } from 'horizon-react';
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap';

import { updateRsvpQuery, updateRsvpResult } from '../../../actions/actionCreators';

import PageHeader from '../../_partials/page-header';

import glob from 'styles/app';

/**
  *
  * RSVP Search Page
  *
  * Includes ..
  *
  * @param ..
  *
  * @return {ReactComponent}
  */

const mapDataToProps = {
  invitations: (hz, props) => {
    hz('invitations').fetch().subscribe(
      invitations => {
        invitations.forEach(
          invitation => {
            invitation.guests.forEach(
              guest => {
                if (guest.email && guest.email === props.rsvpSearch.query) {
                  props.dispatch(updateRsvpResult(invitation));
                }
              }
            );
          }
        );
      }
    );
    return hz('invitations');
  }
};

const mapStateToProps = (state) => ({
  rsvpSearch: state.rsvpSearch
});

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const query = this.props.rsvpSearch.query;

    const queryMessage = query
    ? 'Invitation not found'
    : '';

    const inviteFound = this.props.rsvpSearch.result
    ? <Button bsSize="large" className={`${glob.button}`} href={`/rsvp/${this.props.rsvpSearch.result.shortName}`}>Go to RSVP</Button>
    : <div>{queryMessage}</div>;

    return (
      <div>
        <Row>
          <Col xs={12}>
            <PageHeader page="Find Invitation" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form>
              <FormGroup>
                <input placeholder="Email" type="email" id="rsvp-query" value={query} onChange={this.handleChange.bind(this)}/>
                <label htmlFor="rsvp-query"></label>
              </FormGroup>
            </Form>
          </Col>
          <Col xs={12}>
            {inviteFound}
          </Col>
        </Row>
      </div>
    );
  }

  handleChange(event) {
    this.props.dispatch(updateRsvpQuery(event.target.value));
  }
}

export default subscribe({
  mapDataToProps,
  mapStateToProps
})(Rsvp);
