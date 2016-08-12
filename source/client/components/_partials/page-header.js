import React from 'react';
import { Row, Col } from 'react-bootstrap';

import type from 'styles/type';

/**
  *
  * Partial - Page header
  *
  * @param {string} page - Page title
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <Row>
    <Col xs={12}>
      <h1 className={`${type.cursive}`}>{props.page}</h1>
    </Col>
  </Row>
);
