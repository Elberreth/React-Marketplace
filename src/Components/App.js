import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Categories'; 
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <Header />
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
        <UserProfile />
      </div>
    </Router>
  );
}

export default App;
