import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col } from 'react-bootstrap';

import { setRsvp, updateRsvp, updatePlus } from '../../../actions/actionCreators';

import RsvpForm from './form';
import RsvpNotFound from './not-found';
import SavedModal from '../../shared/saved-modal';

import glob from 'styles/app';

import borderImage from '../../../../../static/images/borders/leafs_fat.png';

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

const mapStateToProps = (state) => ({
  rsvp: state.rsvp
});

const databaseInvite = (props) => {
  props.horizon('invitations').find({ shortName: props.params.shortName }).fetch().subscribe(
    invite => props.dispatch(setRsvp(invite))
  );
};

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rsvp: {}, showSavedModal: false };
    databaseInvite(props);
  }

  render() {
    const savedMessage = 'Thank you for RSVPing! You should receive a confirmation email soon.';
    const { rsvp } = this.props;
    const RsvpFound = rsvp.id
        ? <RsvpForm rsvp={rsvp} changeRsvp={this.changeRsvp.bind(this)} sendRsvp={this.sendRsvp.bind(this)} changePlus={this.changePlus.bind(this)} />
        : <RsvpNotFound />;

    return (
      <Row>
        <SavedModal title="RSVP Sent" message={savedMessage} show={this.state.showSavedModal} closeSavedModal={this.closeSavedModal.bind(this)} />
        <Col xs={12}>
          {RsvpFound}
          <div className={`${glob.tCenter}`}>
            <img alt="border" src={borderImage} responsive />
          </div>
        </Col>
      </Row>
    );
  }

  showSavedModal() {
    databaseInvite(this.props);
    this.setState({ showSavedModal: true });
  }

  closeSavedModal() {
    this.setState({ showSavedModal: false });
  }

  changeRsvp(rsvpBool, index) {
    this.props.dispatch(updateRsvp(rsvpBool, index));
  }

  changePlus(event) {
    this.props.dispatch(updatePlus(event.target.value));
  }

  sendRsvp(event) {
    event.preventDefault();
    const rsvpData = Object.assign({}, this.props.rsvp, { returned: true });
    const invitations = this.props.horizon('invitations');
    invitations.update(rsvpData).subscribe(
      (id) => this.showSavedModal(),
      (err) => console.error(err)
    );
  }
}

export default subscribe({
  mapStateToProps
})(Rsvp);
