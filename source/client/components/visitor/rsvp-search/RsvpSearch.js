import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import { updateRsvpQuery, updateRsvpResult } from '../../../actions/actionCreators';
import PageHeader from '../../_partials/page-header';
import InviteNotFound from '../rsvp/not-found';
import SubmitBtn from '../../shared/submit-btn';
import glob from 'styles/app';
import effects from 'styles/effects';
import Scroll from 'react-scroll';

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

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const emailInInvitation = (invitation, props, cb) => {
  let found = false;
  if (invitation.guests) {
    invitation.guests.forEach(
      guest => {
        if (guest.email && guest.email === props.rsvpSearch.query) {
          found = true;
        }
      }
    );
  }
  cb(found);
};

const mapDataToProps = {
  invitations: (hz, props) => {
    hz('invitations').fetch().subscribe(
      invitations => {
        if (invitations && invitations.length > 0) {
          invitations.forEach(
            invitation => {
              emailInInvitation(invitation, props, (found) => {
                if (found && !props.rsvpSearch.result) {
                  props.dispatch(updateRsvpResult(invitation));
                }
              });
            }
          );
        }
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

  componentDidMount () {
    scrollSpy.update();
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const query = this.props.rsvpSearch.query;

    let inviteFoundOrNotJsx = (
      <div className={`${effects.fade}`}>
        <InviteNotFound />
      </div>
    );

    if (!this.state.submitted) {
      inviteFoundOrNotJsx = (
        <Col xs={12} style={{ textAlign: 'center' }} className={`${effects.fade}`}>
          <SubmitBtn displayText="Find" />
        </Col>
      );
    } else if (this.props.rsvpSearch.result) {
      // added check for when invite found, and then input changes
      emailInInvitation(this.props.rsvpSearch.result, this.props, (found) => {
        if (found) {
          const shortName = this.props.rsvpSearch.result.shortName;
          inviteFoundOrNotJsx = (
              <Col xs={12} style={{ textAlign: 'center' }} className={`${effects.fade}`}>
                <h3 style={{ marginTop: '15px' }}>RSVP Found</h3>
                <Button bsSize="large" className={`${glob.button}`} href={`/rsvp/${shortName}`}>
                  Go to RSVP
                </Button>
              </Col>
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
        <div className={glob.section}>
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
                  {inviteFoundOrNotJsx}
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
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

    if (this.state.submitted === true) {
      this.setState({ submitted: false });
    }

    this.props.dispatch(updateRsvpQuery(event.target.value));
  }
}

export default subscribe({
  mapDataToProps,
  mapStateToProps
})(Rsvp);
