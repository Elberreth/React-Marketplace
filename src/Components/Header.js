import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from './Marketplace.jpg'; 
import UserProfile from './UserProfile';

function Header({ user, loggedIn, onLogin, onLogout }) {
  // Dummy user data
  const dummyUser = {
    name: 'test test',
    email: 'test@test.com',
  };

  // Hantera inloggning
  const handleLogin = () => {
    onLogin(dummyUser);
  };

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
                <Link to="/" onClick={onLogout}>Logout</Link>
              ) : (
                <Link to="/userprofile" onClick={handleLogin}>Login</Link>
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














