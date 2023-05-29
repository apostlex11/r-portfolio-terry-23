import React from 'react';
import Navbar from './Navbar';
import './header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Terry Sa</h1>
        <p>Welcome to my Portfolio!</p>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
