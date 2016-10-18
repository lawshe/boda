import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import wedding from '../../../../../config/wedding.js';

/**
  *
  * Admin menu links
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
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">{coupleInitials}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="/admin/invitations">All Invitations</NavItem>
          <NavItem href="/admin/invitations/add">Add Invitation</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
