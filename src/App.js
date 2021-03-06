import React from "react";
import "./App.css";

//COMPONENTS
import Navbar from "./Components/NavBar";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

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
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects" exact component={Projects} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
