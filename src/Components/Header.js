import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import logo from './Marketplace.jpg'; 
import './Header.css'; 

function Header({ user }) {
  return (
    <div className="header-container">
      <div className="header-content">
        {/* Logo */}
        <img src={logo} alt="Marketplace Logo" className="logo" />

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* User Profile */}
        <div>
          <UserProfile user={user} />
        </div>
      </div>
    </div>
  );
}

export default Header;




