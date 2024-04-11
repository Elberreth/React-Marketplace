import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Categories'; 
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
   
    const dummyUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };
    setUser(dummyUser);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Header user={user} loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <UserProfile user={user} />
      </div>
    </Router>
  );
}

export default App;
