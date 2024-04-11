import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from './Marketplace.jpg'; 
import UserProfile from './UserProfile';


function Header({ user, loggedIn, onLogin, onLogout }) {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li>
              {loggedIn ? (
                <button onClick={onLogout}>Logout</button>
              ) : (
                <Link to="/userprofile">Login</Link>
              )}
            </li>
            <li><Link to="/signup">Sign Up</Link></li>
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





