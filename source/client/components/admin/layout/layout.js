import React from 'react';
import { Grid } from 'react-bootstrap';

import Menu from './menu';

/**
  *
  * Layout for admin page
  *
  * @param  {Object} children - routes
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <div>
    <Menu />
    <Grid>
      {props.children}
    </Grid>
  </div>
);
