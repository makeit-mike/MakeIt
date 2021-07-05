import React from "react";
import BlackBar from "../Components/BlackBar";

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
      <div className="textSection">
        <BlackBar />
        This page was not found. <br></br> But that is okay, here is a terrible
        interpretation of how the solar system works. <br />
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
      </div>
    );
  }
}

export default PageNotFound;
