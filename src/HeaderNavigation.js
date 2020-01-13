import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Routes from "./Routes";

import "./HeaderNavigation.css"

class HeaderNavigation extends Component {
  render() {
    return (
      <div className="HeaderNavigation">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/about">Clean Ocean Action</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/upload">
              <NavItem>Upload</NavItem>
            </LinkContainer>
            <LinkContainer to="/map">
              <NavItem>Map</NavItem>
            </LinkContainer>
            <LinkContainer to="/site">
              <NavItem>Site</NavItem>
            </LinkContainer>
            <LinkContainer to="/trends">
              <NavItem>Trends</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default HeaderNavigation;
