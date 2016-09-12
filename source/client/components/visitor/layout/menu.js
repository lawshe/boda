import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import glob from 'styles/app';
import local from './_styles';

/**
  *
  * The visitor menu
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const ACTIVE = { color : variables.$blue };

export default () => {
  const coupleOneInitial = wedding.couple[0].name.first.charAt(0);
  const coupleTwoInitial = wedding.couple[1].name.first.charAt(0);
  const coupleInitials = `${coupleOneInitial} & ${coupleTwoInitial}`;

  return (
    <Navbar className={`${glob.mainMenu}`}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" className={local.initials}>{coupleInitials}</a>
        </Navbar.Brand>
        <Navbar.Toggle id={local.navToggle} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav id={local.navList}>
          <li><Link to="/rsvp" activeStyle={ACTIVE}>RSVP</Link></li>
          <li><Link to="/the-wedding" activeStyle={ACTIVE}>The Wedding</Link></li>
          <li><Link to="/registry" activeStyle={ACTIVE}>Registry</Link></li>
          <li><Link to="/city-guide" activeStyle={ACTIVE}>City Guide</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
