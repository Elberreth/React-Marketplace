import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './Header.css'; 

function Header({ user }) {
  return (
    <div className="header-container">
      <div className="header-content">
        
        <h1></h1>
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



