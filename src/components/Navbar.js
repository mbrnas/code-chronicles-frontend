import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white custom-brand" to="/">
          Code Chronicles
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-nav" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to="/posts"
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users">
                Users
              </NavLink>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
