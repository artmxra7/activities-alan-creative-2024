// src/App.js
import React from 'react';
import Header from './elements/header';
import Footer from './elements/footer';
import { Route, Routes } from 'react-router-dom';
import Login from './page/loginpage';
import Register from './page/registerpage';
import Coba from './page/Coba';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Coba" element={<Coba />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
