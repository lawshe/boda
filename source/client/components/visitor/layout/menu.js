import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';
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
          <NavItem href="/rsvp">RSVP</NavItem>
          <NavItem href="/the-wedding">The Wedding</NavItem>
          <NavItem href="/registry">Registry</NavItem>
          <NavItem href="/city-guide">City Guide</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
