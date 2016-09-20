import React from 'react';
// import { Link } from 'react-router';
import { subscribe } from 'horizon-react';
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';

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
    // this.state({ active: false });
  }


  render() {
    const query = this.props.rsvpSearch.query;

    const queryMessageJsx = query
      ? (
        <div>
          <h2>Invitation not found for</h2>
          <h3>{query}</h3>
          <h4>Email <a href="mailto:{wedding.email}&body={query}">{wedding.email}</a> for support.</h4>
        </div>
        )
      : '';

    const inviteFound = this.props.rsvpSearch.result
    ? <Button bsSize="large" className={`${glob.button}`} href={`/rsvp/${this.props.rsvpSearch.result.shortName}`}>Go to RSVP</Button>
    : <div>{queryMessageJsx}</div>;

    const inputJsx = (
      <span>
        <label htmlFor="rsvp-query" className={glob.matLabel}>Email</label>
        <input
          className={`${glob.matInput}`}
          type="email"
          id="rsvp-query"
          value={query}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          onFocus={this._handleFocus.bind(this)}
        />
      </span>
    );

    let formGroupClasses = `${glob.matGroup}`;
    if (this.state && this.state.active) {
      formGroupClasses = `${glob.matGroup} ${glob.isActive} ${glob.isCompleted}`;
    }

    const formGroupJsx = (
      <FormGroup className={formGroupClasses} style={{ textAlign: 'center' }}>
        {inputJsx}
      </FormGroup>
    );

    return (
      <div>
        <PageHeader page="Find Invitation" />
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3}>
            <Form
              className={glob.card}
              onSubmit={this._handleSubmit}
              style={{ padding: '30px', textAlign: 'center' }}
            >
              <Row>
                <Col xs={12}>
                  {formGroupJsx}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col xs={12} style={{ textAlign: 'center' }}>
            {inviteFound}
          </Col>
        </Row>
      </div>
    );
  }


  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleBlur() {
    if (this.props.rsvpSearch.query === '') {
      this.setState({ active: false });
    }
  }

  _handleFocus() {
    this.setState({ active: true });
  }

  _handleChange(event) {
    if (event.target.value === '') {
      this.setState({ active: false });
    }
    this.props.dispatch(updateRsvpQuery(event.target.value));
  }
}

export default subscribe({
  mapDataToProps,
  mapStateToProps
})(Rsvp);
