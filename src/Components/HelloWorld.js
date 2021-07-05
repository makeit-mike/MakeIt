import React from "react";
import world from "../static/world.gif";
import { Link } from "react-router-dom";
import BlackBar from "./BlackBar";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <div className="textSection">
          <BlackBar />
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
