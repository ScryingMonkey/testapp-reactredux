import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TopBar extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        Test Topbar
      </div>
    )
  };
}
export default TopBar;