import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import NavList from './nav-list';
import EucThree from '../../svg/euc-3';
import EucFour from '../../svg/euc-4';
import fxns from '../../../../utils/fxns';

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
// if (today.toDateString() === bigDay.toDateString()) {
//   countdown = 'TODAY IS THE DAY!';
// } else {
//   countdown = `Just ${numberOfDaysUntil()} More Days!`;
// }

const weddingDate = fxns.weddingDotDate();

export default () => (
  <div className={`${local.footer} ${glob.verticalContainer}`}>
      <Row className={`${glob.verticallyAligned}`}>
        <Col xs={12} sm={3} md={3} lg={4} className={`${glob.verticalCol}`}>
          <div className={`${local.footerEuc} ${local.footerEucOne}`}><EucThree color="$green" /></div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className={glob.verticalCol}>
          <h3 style={{ marginBottom: '5px' }}>{weddingDate}</h3>
          <p className={glob.smallType}>{countdown}</p>
          <NavList navId="footerMenu" />
        </Col>
        <Col xs={12} sm={3} md={3} lg={4} className={`${glob.verticalCol}`}>
          <div className={`${local.footerEuc} ${local.footerEucTwo}`}>
            <EucFour color="$green" />
          </div>
        </Col>
      </Row>
  </div>
);
