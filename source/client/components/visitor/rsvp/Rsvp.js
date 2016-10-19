import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import Row from 'react-bootstrap/lib/Row';
import http from 'http';
import querystring from 'querystring';
import { setRsvp, updateRsvp, updatePlus } from '../../../actions/actionCreators';
import glob from 'styles/app';
import page from '../../../../../config/page';
import wedding from '../../../../../config/wedding';
import PageHeader from '../../_partials/page-header';
import RsvpFormReceived from './rsvp-form-received';
import RsvpForm from './form';
import RsvpNotFound from './not-found';
import SavedModal from '../../shared/saved-modal';
import Scroll from 'react-scroll';

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

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const port = page.port;

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

  componentDidMount () {
    scrollSpy.update();
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const savedMessageJsx = (
      <span>
        Thank you for RSVPing! You should receive an email confirmation soon.
        <br />
        If you do not receive an email confirmation within the hour, please contact:
        <br />
        <a href={`mailto:${wedding.email}`} className={glob.email}>
          {wedding.email}
        </a>
      </span>
    );
    const { rsvp } = this.props;
    let RsvpFound;
    if (rsvp.id && rsvp.returned) {
      RsvpFound = <RsvpFormReceived rsvpProcessed={rsvp.processed} />;
    } else if (rsvp.id) {
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
        <div className={glob.section}>
          <Row style={{ textAlign: 'center' }}>
            <SavedModal
              id="test"
              title="RSVP Sent"
              message={savedMessageJsx}
              show={this.state.showSavedModal}
              _closeSavedModal={this._closeSavedModal.bind(this)}
            />
            {RsvpFound}
          </Row>
        </div>
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
        host: page.host,
        port,
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
      () => {
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
