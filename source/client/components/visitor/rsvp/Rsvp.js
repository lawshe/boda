import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col } from 'react-bootstrap';

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
    invite => props.dispatch(setRsvp(invite))
  );
};

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
  //   // this.state = { rsvp: {}, showSavedModal: false };
    this.state = { showSavedModal: false };
    databaseInvite(props);
  }
  // constructor(props) {
    // super(props);
    // this.invitationsCollection = this.props.horizon('invitations');
    // this.state = { invitations: [] };
  // }

  // componentDidMount() {
  //   this.messageCollection.watch().subscribe((collection) => {
  //     if (collection) {
  //       this.setState({ invitations: collection });
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  render() {
    console.log('RSVP this.props',this.props);
    // console.log('RSVP this.state',this.state.rsvp);
    const savedMessage = 'Thank you for RSVPing! You should receive a confirmation email soon.';
    const { rsvp } = this.props;

    let RsvpFound;
    if(rsvp.id){
      console.log("FOUND!! ", rsvp.id);
      RsvpFound = <RsvpForm rsvp={rsvp} />;
    } else {
      RsvpFound = <RsvpNotFound />
    }

    return (
      <div>
        <PageHeader page="RSVP" />
        <Row>
          <SavedModal
            title="RSVP Sent"
            message={savedMessage}
            show={this.state._showSavedModal}
            closeSavedModal={this._closeSavedModal.bind(this)}
          />
          <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
            {RsvpFound}
          </Col>
        </Row>
      </div>
    );
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

  sendRsvp(event) {
    event.preventDefault();
    const rsvpData = Object.assign({}, this.props.rsvp, { returned: true });
    const invitations = this.props.horizon('invitations');
    invitations.update(rsvpData).subscribe(
      (id) => this.showSavedModal(),
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

// export default Rsvp;
