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
              to="/tracker"
              className="nav-btn first-nav"
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
              to="/report"
              className="nav-btn "
              children="Reports"
              onClick={() => {}}
            />
          </div>

          <ul className="burger-menu">
            <li>
              <NavTab
                to="/tracker"
                className="nav-mobile"
                children="Daily Tracker"
                onClick={() => this.setState({})}
              >
                <span>
                  <i className="fa fa-fw fa-arrow-right" />
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
                  <i className="fa fa-fw fa-arrow-right" />
                  Calculators
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
                  <i className="fa fa-fw fa-arrow-right" />
                  Report
                </span>
              </NavTab>
            </li>
            <li>
              <label
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
