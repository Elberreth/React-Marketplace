import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile({ user }) {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function Header({ user }) {
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
        <UserProfile user={user} />
      </div>
    </header>
  );
}
export default Header;
