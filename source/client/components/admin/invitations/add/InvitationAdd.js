import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';
import { Row, Col, Form, ListGroup, ListGroupItem, Button, Well } from 'react-bootstrap';

import PageHeader from '../../../_partials/page-header';

import {
  updateGuestName,
  updateGuestEmail,
  addGuest,
  updateShortName,
  updatePlusAllowed
} from '../../../../actions/actionCreators';

import SubmitBtn from '../../../shared/submit-btn';

import AddPersonNameFirst from './add-person-name-first';
import AddPersonNameLast from './add-person-name-last';
import AddPersonEmail from './add-person-email';
import ShortName from './short-name';
import PlusGuests from './plus-guests'
import SavedModal from '../../../shared/saved-modal';

import glob from 'styles/app';

/**
  *
  * Admin - Add an invitation
  *
  * Includes insert into invitations
  *
  * @param horizon
  *
  * @return {ReactComponent}
  */

const mapStateToProps = (state) => {
  return {
    newInvitation: state.newInvitation
  };
};

class AddInvitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSavedModal: false };
  }

  render() {
    const savedMessage = 'Invitation Added';
    const { newInvitation } = this.props;
    return (
      <div>
        <h1>Add Invitation</h1>
        <SavedModal
          title="Saved"
          message={savedMessage}
          show={this.state.showSavedModal}
          _closeSavedModal={this.closeSavedModal.bind(this)}
        />
        <Row>
          <Col sm={12}>
            <Well>
              <Form onSubmit={this.addInvitation.bind(this)}>
                <Row>
                  <Col sm={12}>
                    <Button
                      className={`${glob.button} ${glob.marginBtmLg}`}
                      onClick={this.addGuest.bind(this)}
                    ><i className="fa fa-plus"></i> Another Guest</Button>
                  </Col>
                </Row>
                <ListGroup>
                  {newInvitation.guests.map(
                    (guest, index) => (
                      <ListGroupItem key={index}>
                        <AddPersonNameFirst
                          name={guest.name}
                          index={index}
                          onChange={this.changeNameFirst.bind(this)}
                        />
                        <AddPersonNameLast
                          name={guest.name}
                          index={index}
                          onChange={this.changeNameLast.bind(this)}
                        />
                        <AddPersonEmail
                          guest={guest.email}
                          index={index}
                          onChange={this.changeEmail.bind(this)}
                        />
                      </ListGroupItem>
                    )
                  )}
                </ListGroup>

                <ShortName
                  shortName={newInvitation.shortName}
                  onChange={this.changeShortName.bind(this)}
                />

                <PlusGuests
                  plus={newInvitation.plus.allowed}
                  onChange={this.changePlus.bind(this)}
                />

                <Row>
                  <Col sm={12}>
                    <SubmitBtn displayText="Add Invitation" />
                  </Col>
                </Row>
              </Form>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }

  // insert into DB
  addInvitation(event) {
    event.preventDefault();
    const invitations = this.props.horizon('invitations');
    invitations.insert(this.props.newInvitation).subscribe(
      () => this.showSavedModal(),
      (err) => console.error(err)
    );
    createDoc(invitations, this.props.newInvitation);
  }

  // Modal
  showSavedModal() {
    this.setState({ showSavedModal: true });
  }

  closeSavedModal() {
    this.setState({ showSavedModal: false });
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
})(AddInvitation);
