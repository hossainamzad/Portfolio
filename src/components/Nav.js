import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './Nav.css';
const Navigation = () =>
    <div>
      <Nav>
       <NavItem className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
        </NavItem>
      </Nav>
    </div>

export default Navigation;
