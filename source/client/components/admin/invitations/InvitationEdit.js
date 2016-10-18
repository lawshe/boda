import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import Well from 'react-bootstrap/lib/Well';
import setInvitation from '../../../actions/actionCreators';
import InvitationForm from './_partials/invitation-form';
import SavedModal from '../../shared/saved-modal';

/**
  *
  * Admin - Edit an invitation
  *
  * Includes update in invitations
  *
  * @param horizon
  *
  * @return {ReactComponent}
  */

const mapDataToProps = {
  invitations: (hz, props) => {
    hz('invitations').find(props.params.id).watch().subscribe(
      invitationFound => {
        if (invitationFound && invitationFound.id === props.params.id) {
          if (!props.invitation.id) {
            props.dispatch(setInvitation(invitationFound));
          }
        }
      }
    );
    return hz('invitations');
  }
};

//
const mapStateToProps = (state) => {
  return {
    invitation: state.invitation
  };
};

class EditInvitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSavedModal: false };
  }

  render() {
    const savedMessage = 'Invitation Saved';
    const invitation = this.props.invitation ? this.props.invitation : null;
    const returnedMessage = invitation && invitation.returned
      ? <h2 style={{ marginBottom: '0px', textAlign: 'left' }}>Returned</h2>
      : <h2 style={{ marginBottom: '0px',  textAlign: 'left' }}>NOT Returned</h2>;

    return (
      <div>
        <h1>Edit Invitation</h1>
        <SavedModal
          title="Saved"
          message={savedMessage}
          show={this.state.showSavedModal}
          _closeSavedModal={this.closeSavedModal.bind(this)}
        />
        {returnedMessage}
        <Row>
          <Col sm={12}>
            <Well>
              <Form onSubmit={this.editInvitation.bind(this)}>
                <InvitationForm />
              </Form>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }

// TODO:
// Test if processed maintained

  // insert into DB
  editInvitation(event) {
    event.preventDefault();
    const invitations = this.props.horizon('invitations');
    // invitations.find(this.props.invitation.id).update(this.props.invitation).subscribe(
    //   (res) => {
    //     this.showSavedModal()
    //   },
    //   (err) => console.error(err)
    // );
    invitations.update(this.props.invitation).subscribe(
      () => {
        this.showSavedModal();
      },
      (err) => console.error(err)
    );
  }

  // Modal
  showSavedModal() {
    this.setState({ showSavedModal: true });
  }

  closeSavedModal() {
    this.setState({ showSavedModal: false });
  }
}

export default subscribe({
  mapDataToProps,
  mapStateToProps
})(EditInvitation);
