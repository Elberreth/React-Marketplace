import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Categories'; 
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const user = {
    name: 'John Doe',
    email: 'john@test.com'
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <UserProfile user={user} />
      </div>
    </Router>
  );
}

export default App;
