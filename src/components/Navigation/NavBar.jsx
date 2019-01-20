import React from "react";
import NavTab from "./NavTab.jsx";

import "./Nav.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  // toggleBurgerMenu = () => {
  //   const toggledState = document.getElementById("site-nav-control");
  //   toggledState.checked = !toggledState.checked;
  // };

  render() {
    const { checked } = this.state;
    return (
      <div className="nav-bar">
        <input
          type="checkbox"
          id="site-nav-control"
          className="hidden"
          checked={checked}
          readOnly
        />
        <label
          htmlFor="site-nav-control"
          id="menu-icon"
          className="icon fa fa-bars"
          onClick={() => this.setState({ checked: !checked })}
        />
        <nav className="nav-bar">
          <div>
            <NavTab
              to="/landing"
              className="nav-btn"
              children="Log In"
              onClick={() => {}}
            />

            <NavTab
              to="/tracker"
              className="nav-btn"
              children="Daily Tracker"
              onClick={() => {}}
            />
            <NavTab
              to="/calculator"
              className="nav-btn "
              children="Calculators"
              onClick={() => {}}
            />
            <NavTab
              to="/exercise"
              className="nav-btn "
              children="Exercise"
              onClick={() => {}}
            />
            <NavTab
              to="/report"
              className="nav-btn "
              children="Reports"
              onClick={() => {}}
            />
          </div>

          <ul className="burger-menu">
            <li>
              <NavTab
                to="/landing"
                className="nav-mobile"
                children="Log In"
                onClick={() => this.setState({ checked: false })}
              >
                <span>
                  <i className="fa fa-fw  fas fa-angle-right" />
                  Landing
                </span>
              </NavTab>
            </li>
            <li>
              <NavTab
                to="/tracker"
                className="nav-mobile"
                children="Daily Tracker"
                onClick={() => this.setState({ checked: false })}
              >
                <span>
                  <i className="fa fa-fw  fas fa-angle-right" />
                  Daily Tracker
                </span>
              </NavTab>
            </li>
            <li>
              <NavTab
                to="/calculator"
                className="nav-mobile"
                children="Calculators"
                onClick={() => this.setState({ checked: false })}
              >
                <span>
                  <i className="fa fa-fw  fas fa-angle-right" />
                  Calculators
                </span>
              </NavTab>
            </li>
            <li>
              <NavTab
                to="/exercise"
                className="nav-mobile"
                children="Exercise"
                onClick={() => this.setState({ checked: false })}
              >
                <span>
                  <i className="fa fa-fw  fas fa-angle-right" />
                  Exercise
                </span>
              </NavTab>
            </li>
            <li>
              <NavTab
                to="/report"
                className="nav-mobile"
                children="Reports"
                onClick={() => this.setState({ checked: false })}
              >
                <span>
                  <i className="fa fa-fw  fas fa-angle-right" />
                  Report
                </span>
              </NavTab>
            </li>

            <li>
              <label
                className="nav-mobile"
                htmlFor="site-nav-control"
                onClick={() => this.setState({ checked: false })}
              >
                <i className="fa fa-fw fa-times" />
                <span>Close</span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
