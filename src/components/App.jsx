import React from 'react';
import './App.css';

import List from "./List";
import logo from './logo.svg';
import Form from './Forms';

const App = () => (
  <div className="App">
    <div className="App-header">
      {/* <header className="App-header"/> */}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />  
      </div>
    </div>

  </div>
);
export default App;