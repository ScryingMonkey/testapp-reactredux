import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import TopBar from './components/TopBar/TopBar';

export default (
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage} />
    <Route path="/contentpage" component={HomePage}/>
  </Route>
);
