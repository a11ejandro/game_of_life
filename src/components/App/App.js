import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ActiveWorld from '../../containers/ActiveWorld/ActiveWorld'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Game of life</h1>
        </header>
        <ActiveWorld/>
      </div>
    );
  }
}

export default App
