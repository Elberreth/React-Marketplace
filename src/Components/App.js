import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';




function App() {
  const user = {
    name: 'John Doe',
    email: 'john@test.com'
  };

  return (
    <Router>
      <div>
        <Header />
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