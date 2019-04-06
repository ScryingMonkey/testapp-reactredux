import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import './index.css';
import App from './components/App.jsx'
import * as serviceWorker from './serviceWorker';

import {addArticle} from './actions/index';

ReactDOM.render(
  <Provider store={store}>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
    <div className="container">
      <App />
    </div>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.store = store;
window.addArticle = addArticle;