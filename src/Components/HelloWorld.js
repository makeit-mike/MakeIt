import React from "react";
import world from "../static/world.gif";
import { Link } from "react-router-dom";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className="HelloWorld">
            <span style={{ color: "#4ece45" }}>H</span>
            <span style={{ color: "#2cc8d8e3" }}>e</span>
            <span style={{ color: "#2e56e4" }}>l</span>
            <span style={{ color: "#5900e8" }}>l</span>
            <span style={{ color: "#9f20e0" }}>o</span>
          </p>
          <img src={world} />
        </div>
        <br />
        <div className="HeaderText">
          This is my website. <br />
          It isn't fancy because I am not fancy. <br />I write code. If you are
          here, you may like to see my <Link to={"/projects"}>projects</Link>
          ...
          <br />
          If not, well thanks for stopping by anyway!
        </div>
      </div>
    );
  }
}

export default HelloWorld;
