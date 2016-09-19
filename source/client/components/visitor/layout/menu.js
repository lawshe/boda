import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import NavList from './nav-list';
import variables from '../../../../../config/variables.js';

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
          <Link href="/" className={local.initials} activeStyle={ACTIVE}>{coupleInitials}</Link>
        </Navbar.Brand>
        <Navbar.Toggle id={local.navToggle} />
      </Navbar.Header>
      <Navbar.Collapse>
        <NavList navId="mainMenu" />
      </Navbar.Collapse>
    </Navbar>
  );
};
