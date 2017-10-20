import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';
import './Nav.css';
const Navigation = () =>
    <div>
      <Nav>
       <NavItem className="navbar">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/projects">PROJECTS</NavLink>
        </NavItem>
      </Nav>
    </div>

export default Navigation;
