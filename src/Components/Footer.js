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

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <a
            href="https://github.com/makeit-mike/MakeIt/"
            style={{ opacity: "50%" }}
            target="_blank"
            title="This is open source! I am fine if you take this for your own inspiration :P"
          >
            GitHub: MakeIt-Mike
          </a>

          <button
            className="pseudoLinkButton"
            style={{ opacity: "50%" }}
            onClick={this.handleClick}
            title="This is a JS alert, because it is completely superflous"
          >
            About site.
          </button>
          <img src={Divider} className="DividerFooter" />
        </div>
      </>
    );
  }
  handleClick = () => {
    var blerb =
      "Built in React. Huge inspiration from early 2000s websites, assets from Blaine's World";
    alert(blerb);
  };
}

export default Footer;
