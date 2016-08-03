import React from 'react';
import { Link } from 'react-router';

import local from './_styles';

/**
  *
  * Admin menu links
  *
  * @param none
  *
  * @return {ReactComponent}
  */

export default () => (
  <ul className={`${local.menu}`}>
    <li><Link className={`${local.menuLink}`} to="/admin/invitations">All</Link></li>
    <li><Link className={`${local.menuLink}`} to="/admin/invitations/add">Add</Link></li>
  </ul>
);
