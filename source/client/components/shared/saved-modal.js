import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

/**
  *
  * Saved modal
  *
  * @param {String} title - Title of the modal
  * @param {Boolean} show - To show or not to show the modal
  * @param {String} message - The body of the modal
  * @param {requestCallback} closeSavedModal - fired when the header closeButton or bg is clicked
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <Modal show={props.show} onHide={props._closeSavedModal}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>{props.message}</p>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={props._closeSavedModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);
