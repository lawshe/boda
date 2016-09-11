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
    <Grid style={{minHeight : '100vh', padding: '30px'}}>
      {props.children}
    </Grid>
    <Footer />
  </div>
);
