import React from "react";
import "./App.css";

//COMPONENTS
import Navbar from "./Components/NavBar";

//ROUTING & PAGES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects" exact component={Projects} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
