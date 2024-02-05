// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/icon.png" alt="Mathree booking site logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/routes">Routes</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
