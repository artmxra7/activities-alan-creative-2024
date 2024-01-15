import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Formp from "./pages/form";

import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-emerald-300">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/form" element={<Formp />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
