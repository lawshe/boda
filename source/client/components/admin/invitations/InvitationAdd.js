import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import Well from 'react-bootstrap/lib/Well';
import SavedModal from '../../shared/saved-modal';
import InvitationForm from './_partials/invitation-form';

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
    invitation: state.invitation
  };
};

class AddInvitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSavedModal: false };
  }

  render() {
    const savedMessage = 'Invitation Added';
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
                <InvitationForm />
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
    invitations.insert(this.props.invitation).subscribe(
      (res) => {
        this.showSavedModal()
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
  mapStateToProps
})(AddInvitation);
