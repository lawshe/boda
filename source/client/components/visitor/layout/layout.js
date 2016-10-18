import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import glob from 'styles/app';
import local from './_styles';
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
    <Grid className={`${local.mainGrid}`}>
      {props.children}
    </Grid>
    <Footer />
  </div>
);
