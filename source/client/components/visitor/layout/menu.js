import React from 'react';
import { Link } from 'react-router';

import local from './_styles';

/**
  *
  * The visitor menu
  *
  * @param none
  *
  * @return {ReactComponent}
  */

export default () => (
  <ul className={`${local.menu}`}>
    <li><Link className={`${local.menuLink}`} to="/rsvp">RSVP</Link></li>
    <li><Link className={`${local.menuLink}`} to="/about">About Us</Link></li>
    <li><Link className={`${local.menuLink}`} to="/details">Details</Link></li>
    <li><Link className={`${local.menuLink}`} to="/registry">Registry</Link></li>
  </ul>
);
