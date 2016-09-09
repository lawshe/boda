import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
        <Nav style={{ float: 'right' }}>
          <NavItem href="/rsvp">RSVP</NavItem>
          <NavItem href="/the-wedding">The Wedding</NavItem>
          <NavItem href="/registry">Registry</NavItem>
          <NavItem href="/city-guide">City Guide</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
