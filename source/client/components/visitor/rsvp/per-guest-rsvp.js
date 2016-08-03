import React from 'react';
import { Row, Col, FormGroup } from 'react-bootstrap';

import RadioButtons from './radio-buttons';
import local from './_styles';
import type from 'styles/type';

/**
  *
  * For within RSVP form, per guest RSVP
  *
  * @param {Object} rsvp
  *
  * @return {ReactComponent}
  */

export default (props) => {
  const rsvps = (props.rsvp.guests).map(
    (guest, i) => (
      <FormGroup className={`${local.person}`} key={i}>
        <Row>
          <Col sm={12}>
            <h3 className={`${type.cursive} ${local.name}`}>{guest.name.first} {guest.name.last}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <RadioButtons guest={guest} index={i} changeRsvp={props.changeRsvp} />
          </Col>
        </Row>
      </FormGroup>
    )
  );

  return (
    <Row><Col xs={12}>{rsvps}</Col></Row>
  );
};
