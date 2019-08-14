import Routes from "./Routes";

import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import "./HeaderNavigation.css";

export class HeaderNavigation extends React.Component {
  public render(): React.Component {
    return (
      <div className="HeaderNavigation">
        <Navbar fluid={true} collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/about">Clean Ocean Action</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
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
