import React from 'react';
import { Image } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import glob from 'styles/app';
import local from './_styles';
import type from 'styles/type';

import fernImage from '../../../../../static/images/ferns.png';

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
    <div className={`${local.home} ${glob.verticalContainer}`}>
      <div className={`${glob.verticallyAligned}`}>
        <h1 className={`${type.gothic}`}>{coupleOne} and {coupleTwo} </h1>
        <Image className={`${local.ferns}`} alt="ferns" src={fernImage} responsive />
      </div>
    </div>
  );
};

export default Home;
