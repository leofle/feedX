import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
  <nav className="navigationWrapper">
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/data">
          Data
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/analytics">
          Analytics
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
