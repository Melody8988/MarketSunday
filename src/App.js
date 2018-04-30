import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ManagePage from './components/ManagePage/ManagePage';
import ResponsesPage from './components/ResponsesPage/ResponsesPage';
import FrontPage from './components/FrontPage/FrontPage'

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Title" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/frontPage" />
        <Route
          path="/frontPage"
          component={FrontPage}
        />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/manage"
          component={ManagePage}
        />
        <Route
          path="/responses"
          component={ResponsesPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
