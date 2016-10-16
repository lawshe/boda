import React from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';

/**
  *
  * For within add invitation form, integer input for allowed number of plus guests
  *
  * @param {Number} plus
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <FormGroup>
    <Row>
      <Col componentClass={ControlLabel} sm={2}>
        Allowed Plus
      </Col>
      <Col sm={6}>
        <input
          type="number"
          placeholder="Allowed Plus"
          value={props.plus}
          onChange={props.onChange.bind(this)}
        />
      </Col>
    </Row>
  </FormGroup>
);
