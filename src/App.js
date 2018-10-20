import React, { Component } from 'react';
import './App.css';

import Navbar from "./Components/Navbar.js";
import Search from "./Components/Search.js";
import Display from "./Components/Display.js";

import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Display />
      </div>
    );
  }
}

export default App;
