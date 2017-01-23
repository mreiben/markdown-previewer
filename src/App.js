import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');

class App extends Component {
  const text = marked('I am using __markdown__.');
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Test!!!</h2>
          <h2>{text}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
