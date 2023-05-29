import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" className="navbar-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
