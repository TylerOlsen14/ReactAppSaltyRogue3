import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./components/logo.jpg";
import Routing from "./Routing";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navbar/>
          <div>
            <img src={logo} alt="Salty Rogue Real Estate"/>
          </div>
          <Routing/>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Clients() {
  return (
    <div>
      <h2>Clients</h2>
    </div>
  );
}
function Prospects() {
  return (
    <div>
      <h2>Prospects</h2>
    </div>
  );
}
export default App;
