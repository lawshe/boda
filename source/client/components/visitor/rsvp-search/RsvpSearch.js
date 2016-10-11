import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { updateRsvpQuery, updateRsvpResult } from '../../../actions/actionCreators';
import PageHeader from '../../_partials/page-header';
import InviteNotFound from '../rsvp/not-found';
import SubmitBtn from '../../shared/submit-btn';
import glob from 'styles/app';
import effects from 'styles/effects';
import local from './_styles';

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

const emailInInvitation = (invitation, props, cb) => {
  let found = false;
  invitation.guests.forEach(
    guest => {
      if (guest.email && guest.email === props.rsvpSearch.query) {
        found = true;
      }
    }
  );
  cb(found);
};

const mapDataToProps = {
  invitations: (hz, props) => {
    hz('invitations').fetch().subscribe(
      invitations => {
        invitations.forEach(
          invitation => {
            emailInInvitation(invitation, props, (found) => {
              if (found) {
                props.dispatch(updateRsvpResult(invitation));
              }
            });
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
    this.state = { submitted: false };
  }

  render() {
    const query = this.props.rsvpSearch.query;

    const queryMessageJsx = query
      ? <InviteNotFound />
      : '';

    let inviteFoundJsx = <div>{queryMessageJsx}</div>;

    if (!this.state.submitted) {
      inviteFoundJsx = <SubmitBtn displayText="Find" />;
    } else if (this.props.rsvpSearch.result) {
      // added check for when invite found, and then input changes
      emailInInvitation(this.props.rsvpSearch.result, this.props, (found) => {
        if (found) {
          const shortName = this.props.rsvpSearch.result.shortName;
          inviteFoundJsx = (
            <div className={`${local.found} ${effects.fade}`}>
              <h3>RSVP Found</h3>
              <Button bsSize="large" className={`${glob.button}`} href={`/rsvp/${shortName}`}>
                Go to RSVP
              </Button>
            </div>
          );
        }
      });
    }

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
    if (this.state && this.state.active || query) {
      formGroupClasses = `${glob.matGroup} ${glob.isActive} ${glob.isCompleted}`;
    }

    const formGroupJsx = (
      <FormGroup className={formGroupClasses} style={{ textAlign: 'center' }}>
        {inputJsx}
      </FormGroup>
    );

    return (
      <div>
        <PageHeader page="Find RSVP" />
        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <Form
              onSubmit={this._handleSubmit.bind(this)}
              style={{ textAlign: 'center' }}
            >
              <div className={glob.card}>
                <Row>
                  <Col xs={12}>
                    {formGroupJsx}
                  </Col>
                </Row>
              </div>
              <Row style={{ marginTop: '30px' }}>
                <Col xs={12} style={{ textAlign: 'center' }}>
                  {inviteFoundJsx}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
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
