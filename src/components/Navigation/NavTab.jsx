import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  return (
    <NavLink className="nav-btn" activeClassName="nav-btn-active" to={props.to}>
      {props.labelName}
    </NavLink>
  );
};

export default NavTab;
