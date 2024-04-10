import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserProfile({ user, onLogout }) {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
  
    const dummyUser = {
      name: 'John Doe',
      email: 'john@test.com'
    };
    setUser(dummyUser);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setUser(null); 
    setLoggedIn(false); 
   
    history.push('/login'); 
  return (
    <header>
      <h1>Marketplace</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div>
        {loggedIn ? (
          <UserProfile user={user} onLogout={handleLogout} />
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;