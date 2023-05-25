import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/">logo</a>
        <div className="hamburger">
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Skills</a>
          </li>
          <li className="nav-item">
            <a href="/">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
