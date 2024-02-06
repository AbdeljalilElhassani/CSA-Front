import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${credentials.username}&password=${credentials.password}`,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success === true) {
          sessionStorage.setItem('username', credentials.username);
          history('/hello');
        }
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };
 
  return (
    <div className="container">
      <h1 className="title">University Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} className="input" />
        </label>
        <label className="label">
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} className="input" />
        </label>
        <button type="submit" className="button">Login</button>
        <p>If you don't have an account, <Link to="/register" className="link">register here</Link>.</p>
      </form>
    </div>
  );
  

};

export default Login;
