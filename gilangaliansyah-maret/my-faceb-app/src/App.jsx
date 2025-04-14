// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import Users from './users';
import Video from './video';
import Bell from './bell';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/video" element={<Video />} />
          <Route path="/bell" element={<Bell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
