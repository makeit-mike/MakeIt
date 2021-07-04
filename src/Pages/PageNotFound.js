import React from "react";
//PLANETS
import Sun from "../static/junk/sun.gif";
import Mercury from "../static/junk/mercury.gif";
import Venus from "../static/junk/venus.gif";
import Mars from "../static/junk/mars.gif";
import Earth from "../static/junk/earth.gif";
import Saturn from "../static/junk/saturn.gif";
import Jupiter from "../static/junk/jupiter.gif";
import Neptune from "../static/junk/neptune.gif";
import Uranus from "../static/junk/uranus.gif";
import Pluto from "../static/junk/pluto.gif";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="PNF">
        <div className="PageNotFoundBlerb">
          This page was not found. <br></br> But that is okay, here is a
          terrible interpretation of how the solar system works. <br />
          (If you are curious why I am missing Earth.. I couldnt find an open
          source GIF that looked alright here.)
          <br />
          If you feel there was supposed to be a page here, you may have found a
          <p className="emoji" title="Bug">
            &#128027;
          </p>
          !
          <br />
          Feel free to contact me with your findings!
          <div className="solarSystem">
            <img src={Sun} className="sun" />
            <img src={Mercury} className="mercury" />
            <img src={Venus} className="venus" />
            <img src={Mars} className="mars" />
            <img src={Earth} className="earth" />
            <img src={Saturn} className="saturn" />
            <img src={Jupiter} className="jupiter" />
            <img src={Neptune} className="jupiter" />
            <img src={Uranus} className="uranus" />
            <img src={Pluto} className="pluto" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
