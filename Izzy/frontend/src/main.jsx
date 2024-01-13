import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';
import AudioPages from './pages/HomeChildrenPages/AudioPages.jsx';
import MonitorPages from './pages/HomeChildrenPages/MonitorPages.jsx';
import ErrorPages from './pages/ErrorPages.jsx';
import PCComponentPages from './pages/HomeChildrenPages/PCComponent.jsx';
import StaffHome from './pages/StaffHome.jsx';
import ProdukPages from './pages/AdminHomeChildrenPages/ProdukPages.jsx';
import TransaksiPages from './pages/AdminHomeChildrenPages/TransaksiPages.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/activities-alan-creative-2024/*"
          element={<App />}
        >
          <Route path="Cart" element={<Cart />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Home" element={<App />}>
            <Route path="Audio" element={<AudioPages />} />
            <Route path="Monitor" element={<MonitorPages />} />
            <Route path="PCComponent" element={<PCComponentPages />} />
          </Route>
          <Route path="Admin" element={<App />}>
            <Route path="Produk" element={<ProdukPages />} />
            <Route path="Transaksi" element={<TransaksiPages />} />
          </Route>
          <Route path="Staff" element={<StaffHome />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
