import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './Header.css'; 
import logo from './Marketplace.jpg'; 

function Header({ user }) {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div>
          <UserProfile user={user} />
        </div>
      </div>
    </div>
  );
}

export default Header;



