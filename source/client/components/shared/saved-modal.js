import React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
  <Modal show={props.show} onHide={props.closeSavedModal}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {props.message}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);
