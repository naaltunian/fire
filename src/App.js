import React, { Component } from 'react';
import './App.css';

import Navbar from "./Components/Navbar.js";
import Search from "./Components/Search.js";
import Display from "./Components/Display.js";
import ResearchUser from "./Components/ResearchUser.js";

import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Display />
        <ResearchUser />
      </div>
    );
  }
}

export default App;
