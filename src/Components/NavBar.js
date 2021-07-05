import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import alien from "../static/junk/alien.gif";
import HomeIcon from "../static/icons/home.gif";
import ComputerIcon from "../static/icons/projects.gif";
import EmailIcon from "../static/icons/email.gif";
import Divider from "../static/divider-2.gif";

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          sticky="right"
          className="navBar"
        >
          <Link to="/">
            {" "}
            <img src={HomeIcon} className="navIcon" alt="Home" title="Home" />
          </Link>
          <Link to="/about">
            {" "}
            <img
              src={alien}
              className="navIcon"
              alt="About Me"
              title="About Me"
            />
          </Link>
          <Link to="/projects">
            {" "}
            <img
              src={ComputerIcon}
              className="navIcon"
              alt="Projects"
              title="Projects"
            />
          </Link>
          <Link to="/contact">
            {" "}
            <img
              src={EmailIcon}
              className="navIcon"
              alt="Contact"
              title="Contact"
            />
          </Link>

          {/* <Navbar.Brand href="#home">
          <Link to="/">MakeIt</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" bg="dark" variant="dark">
          <Nav className="mr-auto" bg="dark" variant="dark">
            <NavDropdown title="Navigation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
          {/* </Navbar.Collapse> */}
        </Navbar>
        <div>
          {" "}
          <img
            src={Divider}
            className="Divider"
            alt="Contact"
            title="Contact"
          />
        </div>
      </>
    );
  }
}

export default NavigationBar;
