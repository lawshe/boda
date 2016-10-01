import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col } from 'react-bootstrap';
import http from 'http';
import querystring from 'querystring';
import { setRsvp, updateRsvp, updatePlus } from '../../../actions/actionCreators';
import PageHeader from '../../_partials/page-header';
import RsvpForm from './form';
import RsvpNotFound from './not-found';
import SavedModal from '../../shared/saved-modal';

/**
  *
  * RSVP Page
  *
  * Includes actions to update rsvp state and database
  *
  * @param  {Object} horizon The horizon object which will be passed to update
  *
  * @return {ReactComponent}
  */

const mapStateToProps = (state) => {
  return {
    rsvp: state.rsvp
  };
};

const databaseInvite = (props) => {
  props.horizon('invitations').find({ shortName: props.params.shortName }).fetch().subscribe(
    invite => {
      return props.dispatch(setRsvp(invite));
    }
  );
};

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSavedModal: false };
    databaseInvite(props);
  }

  render() {
    const savedMessage = 'Thank you for RSVPing! You should receive an email confirmation soon.';
    const { rsvp } = this.props;
    let RsvpFound;
    if (rsvp.id) {
      RsvpFound = (
        <RsvpForm
          rsvp={rsvp}
          _changePlus={this._changePlus.bind(this)}
          _changeRsvp={this._changeRsvp.bind(this)}
          _sendRsvp={this._sendRsvp.bind(this)}
        />
      );
    } else {
      RsvpFound = <RsvpNotFound />;
    }

    return (
      <div>
        <PageHeader page="RSVP" />
        <Row>
          <SavedModal
            id="test"
            title="RSVP Sent"
            message={savedMessage}
            show={this.state.showSavedModal}
            _closeSavedModal={this._closeSavedModal.bind(this)}
          />
          <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
            {RsvpFound}
          </Col>
        </Row>
      </div>
    );
  }
  _notify() {
    const { rsvp } = this.props;
    if (rsvp && rsvp.id) {
      const data = querystring.stringify({
        id: rsvp.id
      });

      const options = {
        host: 'localhost',
        port: 3000,
        path: '/notify',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data)
        }
      };

      const req = http.request(options);
      req.write(data);
      req.end();
    }
  }

  _changePlus(event) {
    this.props.dispatch(updatePlus(event.target.value));
  }

  _changeRsvp(rsvpBool, index) {
    this.props.dispatch(updateRsvp(rsvpBool, index));
  }

  _closeSavedModal() {
    this.setState({ showSavedModal: false });
  }

  _sendRsvp(event) {
    event.preventDefault();
    const rsvpData = Object.assign({}, this.props.rsvp, { returned: true });
    const invitations = this.props.horizon('invitations');
    invitations.update(rsvpData).subscribe(
      (id) => {
        this._notify();
        this._showSavedModal();
      },
      (err) => console.error(err)
    );
  }

  _showSavedModal() {
    databaseInvite(this.props);
    this.setState({ showSavedModal: true });
  }
}

export default subscribe({
  mapStateToProps
})(Rsvp);
