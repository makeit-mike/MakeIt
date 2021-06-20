import logo from './logo.svg';
// import { Button, Navbar, Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';

import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Main from './Main'; // fallback for lazy pages

import './App.css';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
