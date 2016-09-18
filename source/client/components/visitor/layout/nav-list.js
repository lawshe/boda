import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import variables from '../../../../../config/variables.js';

import local from './_styles';

const ACTIVE = { color : variables.$blue };

export default (props) => {
  const navId = local[props.navId];
  return (
    <Nav id={navId}>
      <li><Link to="/rsvp" activeStyle={ACTIVE}>RSVP</Link></li>
      <li><Link to="/the-wedding" activeStyle={ACTIVE}>The Wedding</Link></li>
      <li><Link to="/registry" activeStyle={ACTIVE}>Registry</Link></li>
      <li><Link to="/city-guide" activeStyle={ACTIVE}>City Guide</Link></li>
    </Nav>
  );
};
