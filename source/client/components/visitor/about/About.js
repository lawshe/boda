import React from 'react';
import { Image } from 'react-bootstrap';

import PageHeader from '../../_partials/page-header';

import coupleImage from '../../../../../static/images/couple/couple.png';

/**
  *
  * The about page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

export default () => (
  <div className="page-about">
    <PageHeader page={'About'} />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
    <Image alt="Couple" src={coupleImage} responsive />
  </div>
);
