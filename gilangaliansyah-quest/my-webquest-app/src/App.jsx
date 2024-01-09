  // src/App.js
import React from 'react';
import Header from './elements/header';
import Footer from './elements/footer';
import { Route, Routes } from 'react-router-dom';
import Login from './page/loginpage';
import Register from './page/registerpage';


function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      <Footer />
    </div>
  );
}





export default App;
