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
      
      name: 'test test',
      email: 'test@test.com',
    };
    setUser(dummyUser);
    setLoggedIn(true);
  };

  const handleLogout = () => {
   
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <header>
      <h1></h1>
      <nav>
        <ul>
         
        </ul>
      </nav>
      <div>
      
        
      </div>
    </header>
  );
}

export default Header;
