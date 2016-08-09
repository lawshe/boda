import React from 'react';
import { Grid } from 'react-bootstrap';

import glob from 'styles/app';

import Footer from './footer';
import Menu from './menu';

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
    <Menu />
    <Grid>
      {props.children}
    </Grid>
    <Footer />
  </div>
);
