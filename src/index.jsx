import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from 'react-router-dom';

import "bootstrap" ;
require('../sass/styles.scss');

import store from "store/index";
import App from "components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById("react-app")
);