// src/Hello.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Hello = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('username'));

  const handleLogout = () => {
    // Remove username from session storage
    sessionStorage.removeItem('username');
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) { // Redirect if user is not logged in
    return <Navigate to="/" />;
  }

  // Retrieve username from session storage
  const username = sessionStorage.getItem('username');

  return (
    <div>
      <h1>Hello {username}!</h1>
      <p>Welcome to the hello page.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Hello;
