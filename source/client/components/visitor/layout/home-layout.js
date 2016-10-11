import React from 'react';
import { Grid } from 'react-bootstrap';

import glob from 'styles/app';
import local from './_styles';

import Footer from './footer';
import Menu from './menu';

/**
  *
  * The visitor homepage layout
  *
  * @param
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <div className={`${glob.layoutContainer}`}>
    <Menu />
    <Grid className={`${local.homeGrid}`}>
      {props.children}
    </Grid>
    <Footer />
  </div>
);
