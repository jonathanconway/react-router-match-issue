import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Match, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reac22t</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Match pattern="/abc" render={() => <strong>ABC</strong>} />

        <Link to="/abc">/abc</Link>
      </div>
    );
  }
}

export default App;
