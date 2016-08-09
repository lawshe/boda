import React from 'react';
import { Link } from 'react-router';

import glob from 'styles/app';
import type from 'styles/type';
import local from './_styles';

import 'styles/type.css';
import borderImage from '../../../../../static/images/borders/leafs.png';
import PrettyDate from '../../_partials/pretty-date.js';

/**
  *
  * The main header for visitor
  *
  * @param none
  *
  * @return {ReactComponent}
  */

export default () => (
  <div className={`${local.pageHeader} page-header`}>
    <h1 className={`${type.gothic} ${glob.center}`}><Link to="/"><PrettyDate /></Link></h1>
    <img alt="border fern" src={borderImage} />
  </div>
);
