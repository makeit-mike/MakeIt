import React from "react";
import world from "../static/world.gif";
import { Link } from "react-router-dom";
import alien from "../static/junk/alien.gif";
import HomeIcon from "../static/icons/home.gif";
import ComputerIcon from "../static/icons/projects.gif";
import EmailIcon from "../static/icons/email.gif";
import Divider from "../static/divider-2.gif";

class Nav extends React.Component {
  render() {
    return (
      //linking and routing is handled in App.js
      <div className="NavStickyRight">
        <div className="NavBoxItem">
          <Link to="/">
            <img src={HomeIcon} className="navIcon" alt="Home" title="Home" />
          </Link>
        </div>
        <div className="NavBoxItem">
          <Link to="/about">
            <img
              src={alien}
              className="navIcon"
              alt="About Me"
              title="About Me"
            />
          </Link>
        </div>
        <div className="NavBoxItem">
          <Link to="/projects">
            <img
              src={ComputerIcon}
              className="navIcon"
              alt="Projects"
              title="Projects"
            />
          </Link>
        </div>
        <div className="NavBoxItem">
          <Link to="/contact">
            <img
              src={EmailIcon}
              className="navIcon"
              alt="Contact"
              title="Contact"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
