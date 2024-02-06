import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './login';
import Hello from './Hello'; // Import Hello component
import Register from './register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} /> {/* Add Route for Hello component */}
        <Route path="/register" element={<Register />} /> {/* Add Route for Hello component */}

      </Routes>
    </Router>
  );
}

export default App;
