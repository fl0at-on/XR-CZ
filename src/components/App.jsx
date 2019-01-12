import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Navigation/NavBar.jsx";
import Calculator from "./Calculators/Calculators.jsx";
import Error from "./Error.jsx";
import Trackers from "./Tracker/Trackers.jsx";
import Reports from "./Reports/Reports.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Redirect exact path="/" to="/tracker" />
            <Route path="/tracker" component={Trackers} />
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