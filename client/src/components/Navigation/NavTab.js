import React from "react";
import { NavLink } from "react-router-dom";
//import "./Nav.css";

const NavTab = props => {
  return (
    // {props.onClick() ? return() : return() }
    <div>
      <NavLink
        className={` ${props.className || ""}`}
        activeClassName="nav-btn-active"
        to={props.to}
        onClick={() => props.onClick()}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default NavTab;
