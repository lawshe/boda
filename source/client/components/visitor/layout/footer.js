import React from 'react';
import { Row, Col } from 'react-bootstrap';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import WeddingDate from '../../_partials/pretty-wedding-date';
import NavList from './nav-list';
import EucThree from '../../svg/euc-3';
import EucFour from '../../svg/euc-4';

/**
  *
  * The footer for visitor layout
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const numberOfDaysUntil = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const weddingDate = new Date(wedding.date);
  const today = new Date();
  return Math.round(Math.abs((today.getTime() - weddingDate.getTime()) / (oneDay)));
};

const today = new Date();
const bigDay = new Date(wedding.date);

let countdown = '';
// Todo: past day
if (today.toDateString() === bigDay.toDateString()) {
  countdown = 'TODAY IS THE DAY!';
} else {
  countdown = `Just ${numberOfDaysUntil()} More Days!`;
}


export default () => (
  <div className={`${local.footer} ${glob.verticalContainer}`}>
    <div className={`${glob.verticallyAligned}`}>
      <Row>
        <Col xs={12} sm={4} md={5} className={local.eucOneContainer}>
          <div className={`${local.footerEuc}`}><EucThree color="$whiteDark" /></div>
        </Col>
        <Col xs={12} sm={4} md={2}>
          <h3><WeddingDate /></h3>
          <h4>{countdown}</h4>
          <NavList navId="footerMenu" />
        </Col>
        <Col xs={12} sm={4} md={5} className={local.eucTwoContainer}>
          <div className={`${local.footerEuc} ${local.footerEucTwo}`}><EucFour color="$whiteDark" /></div>
        </Col>
      </Row>
    </div>
  </div>
);
