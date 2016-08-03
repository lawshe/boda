import React from 'react';
import { Link } from 'react-router';

import glob from 'styles/app';
import local from './_styles';

/**
  *
  * The footer for visitor layout
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

export default () => (
  <div className={`${local.footer} ${glob.verticalContainer}`}>
    <h3 className={`${glob.verticallyAligned}`}><i className="fa fa-heart" />...</h3>
  </div>
);
