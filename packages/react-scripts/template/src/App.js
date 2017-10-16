import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FindJobs from './FindJobs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Chem E App</h1>
        </header>
        <FindJobs />
      </div>
    );
  }
}

export default App;
