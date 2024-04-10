import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  
  const isHomeRoute = location.pathname === '/';

 
  return isHomeRoute ? (
    <div>
      <h3>Welcome to Marketplace! Here you can find good products to even better prices.</h3>
    </div>
  ) : null;
}

export default Home;