import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import axios from "axios";
import AdminLayout from "layouts/Admin/Admin.jsx";
import Login from "layouts/Login.jsx";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const hist = createBrowserHistory();
//const API='https://swapi.co/api/people/?format=json';
const API='https://movi.javierfuentesm.now.sh/api/trips';
const fetchdata = async () => {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data)
  return data;
};
const store = createStore(reducer, fetchdata(), composeEnhancers());



ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
        <Route  path="/login" exact>
          <Login />
        </Route>      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
