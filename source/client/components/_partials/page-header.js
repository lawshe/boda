import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import local from './_styles';
import EucOne from '../svg/euc-1';
import EucFive from '../svg/euc-5';

/**
  *
  * Partial - Page header
  *
  * @param {string} page - Page title
  *
  * @return {ReactComponent}
  */

const eucLeftJsx = (
  <div className={`${local.euc} ${local.eucLeft}`}><EucFive color="$green" /></div>
);
const eucRightJsx = (
  <div className={`${local.euc} ${local.eucRight}`}><EucOne color="$green" /></div>
);

export default (props) => (
  <Row>
    <Col xs={12} style={{ padding: '0' }}>
      <h1 className={`${local.pageHeader}`}>{eucLeftJsx}{props.page}{eucRightJsx}</h1>
    </Col>
  </Row>
);
