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
      <Row className={`${glob.verticallyAligned}`}>
        <Col xs={12} sm={3} md={3} className={`${glob.verticalCol}`}>
          <div className={`${local.footerEuc}`}><EucThree color="$green" /></div>
        </Col>
        <Col xs={12} sm={6} md={6} className={glob.verticalCol}>
          <h3><WeddingDate /></h3>
          <h5>{countdown}</h5>
          <NavList navId="footerMenu" />
        </Col>
        <Col xs={12} sm={3} md={3} className={`${glob.verticalCol}`}>
          <div className={`${local.footerEuc} ${local.footerEucTwo}`}>
            <EucFour color="$green" />
          </div>
        </Col>
      </Row>
  </div>
);
