import React, { Component, Fragment } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import logo from "./components/logo.jpg";
import Routing from "./Routing";
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <Routing/>
        <Navbar/>
      </Fragment>
    );
  }
}

export default App;
