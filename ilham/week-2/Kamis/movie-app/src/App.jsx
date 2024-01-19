 // App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./pages/movie";
import MovieDetail from "./pages/mvdtl";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

