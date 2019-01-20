import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Navigation/NavBar.js";
import Calculator from "./Calculators/Calculators.js";
import Error from "./Error.js";
import Landing from "./Landing.js";
import APICall from "./Exercise/ExerciseAPI.js";
import Trackers from "./Tracker/Trackers.js";
import Reports from "./Reports/Reports.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Redirect exact path="/" to="/landing" />
            <Route path="/landing" component={Landing} />
            <Route path="/tracker" component={Trackers} />
            <Route path="/exercise" component={APICall} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/report" component={Reports} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
