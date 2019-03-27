import React from 'react';
import List from "./List";
import logo from './logo.svg';

const App = () => (
  <div className="App">
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

    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
    </div>

  </div>
);
export default App;