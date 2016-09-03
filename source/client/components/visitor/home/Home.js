import React from 'react';

import wedding from '../../../../../config/wedding.js';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import glob from 'styles/app';
import { Row, Col } from 'react-bootstrap';
import local from './_styles';
import EucThree from '../../svg/euc-3';
import EucFour from '../../svg/euc-4';

/**
  *
  * The homepage
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const Home = () => {
  const coupleOne = wedding.couple[0].name.first;
  const coupleTwo = wedding.couple[1].name.first;

  return (
    <div>
        <div className={`${glob.verticalContainer}`}>
          <div className={`${glob.verticallyAligned} ${local.headerContainer}`}>
            <div className={`${local.euc} ${local.eucTop}`}>
              <EucThree color="$green" />
            </div>
            <h1 className={`${local.header}`}>{coupleOne}<br />& {coupleTwo}</h1>
            <div className={`${local.euc} ${local.eucBtm}`}>
              <EucFour color="$green" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
