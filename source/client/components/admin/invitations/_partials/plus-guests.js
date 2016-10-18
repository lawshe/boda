import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

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
