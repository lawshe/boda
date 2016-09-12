import React from 'react';
import { Row, Col } from 'react-bootstrap';

import local from './_styles';
import EucOne from '../svg/euc-1';

/**
  *
  * Partial - Page header
  *
  * @param {string} page - Page title
  *
  * @return {ReactComponent}
  */

const eucLeftJsx = (
  <div className={`${local.euc} ${local.eucLeft}`}><EucOne color="$green" /></div>
);
const eucRightJsx = (
  <div className={`${local.euc}`}><EucOne color="$green" /></div>
);

export default (props) => (
  <Row>
    <Col xs={12} style={{padding: '0'}}>
      <h1 className={`${local.pageHeader}`}>{eucLeftJsx}{props.page}{eucRightJsx}</h1>
    </Col>
  </Row>
);
