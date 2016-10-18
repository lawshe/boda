import React from 'react';
import { subscribe } from 'horizon-react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import {
  updateGuestName,
  updateGuestEmail,
  addGuest,
  updateShortName,
  updatePlusAllowed
} from '../../../../actions/actionCreators';

import SubmitBtn from '../../../shared/submit-btn';

import PersonNameFirst from './person-name-first';
import PersonNameLast from './person-name-last';
import PersonEmail from './person-email';
import ShortName from './short-name';
import PlusGuests from './plus-guests';

import glob from 'styles/app';

/**
  *
  * Admin - Ivitation Form
  *
  * @param horizon
  *
  * @return {ReactComponent}
  */

const mapStateToProps = (state) => {
  return {
    invitation: state.invitation
  };
};

class InvitationForm extends React.Component {
  render() {
    const { invitation } = this.props;
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Button
              className={`${glob.button} ${glob.marginBtmLg}`}
              onClick={this.addGuest.bind(this)}
            ><i className="fa fa-plus"></i> Another Guest</Button>
          </Col>
        </Row>
        <ListGroup>
          {invitation.guests.map(
            (guest, index) => (
              <ListGroupItem key={index}>
                <PersonNameFirst
                  name={guest.name}
                  index={index}
                  onChange={this.changeNameFirst.bind(this)}
                />
                <PersonNameLast
                  name={guest.name}
                  index={index}
                  onChange={this.changeNameLast.bind(this)}
                />
                <PersonEmail
                  email={guest.email}
                  index={index}
                  onChange={this.changeEmail.bind(this)}
                />
              </ListGroupItem>
            )
          )}
        </ListGroup>

        <ShortName
          shortName={invitation.shortName}
          onChange={this.changeShortName.bind(this)}
        />

        <PlusGuests
          plus={invitation.plus.allowed}
          onChange={this.changePlus.bind(this)}
        />

        <Row>
          <Col sm={12}>
            <SubmitBtn displayText="Add Invitation" />
          </Col>
        </Row>
      </div>
    );
  }

  // Guest Name and Email
  changeNameFirst(nameFirst, index) {
    this.props.dispatch(updateGuestName('first', nameFirst, index));
  }

  changeNameLast(nameLast, index) {
    this.props.dispatch(updateGuestName('last', nameLast, index));
  }

  changeEmail(email, index) {
    this.props.dispatch(updateGuestEmail(email, index));
  }

  // Add Another Guest
  addGuest() {
    this.props.dispatch(addGuest());
  }

  // Invitation Short Name
  changeShortName(event) {
    this.props.dispatch(updateShortName(event.target.value));
  }

  // plus
  changePlus(event) {
    this.props.dispatch(updatePlusAllowed(event.target.value));
  }
}

export default subscribe({
  mapStateToProps
})(InvitationForm);
