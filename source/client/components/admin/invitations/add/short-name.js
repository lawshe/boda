import React from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';

/**
  *
  * For within add invitation form, text input for invitation short name used in RSVP URL
  *
  * @param {String} shortName
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <FormGroup>
    <Row>
      <Col componentClass={ControlLabel} sm={2}>
        Short Name
      </Col>
      <Col sm={6}>
        <input
          type="text"
          placeholder="Short Name"
          value={props.shortName}
          onChange={props.onChange.bind(this)}
          required
        />
      </Col>
    </Row>
  </FormGroup>
);
