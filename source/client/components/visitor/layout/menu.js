import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';

/**
  *
  * The visitor menu
  *
  * @param none
  *
  * @return {ReactComponent}
  */

export default () => {
  const coupleOneInitial = wedding.couple[0].name.first.charAt(0);
  const coupleTwoInitial = wedding.couple[1].name.first.charAt(0);
  const coupleInitials = `${coupleOneInitial} & ${coupleTwoInitial}`;

  return (
    <Navbar className={`${glob.mainMenu}`}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">{coupleInitials}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <li><Link to="/rsvp">RSVP</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/the-wedding">The Wedding</Link></li>
          <li><Link to="/registry">Registry</Link></li>
          <li><Link to="/city-guide">City Guide</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
