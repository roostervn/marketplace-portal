import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import BasicLayout from "./layout/basic";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <BasicLayout>
            <Login />
          </BasicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
