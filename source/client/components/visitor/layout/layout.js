import React from 'react';
import { Grid } from 'react-bootstrap';

import glob from 'styles/app';

import MainHeader from './main-header';
import Footer from './footer';

/**
  *
  * The visitor layout
  *
  * @param
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <div className={`${glob.layoutContainer}`}>
    <MainHeader />
    <Grid>
      {props.children}
    </Grid>
    <Footer />
  </div>
);
