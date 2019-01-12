import React from "react";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavTab to="/tracker" labelName="Daily Tracker" />
      <NavTab to="/calculator" labelName="Calculators" />
      <NavTab to="/report" labelName="Reports" />
    </div>
  );
};

export default NavBar;
