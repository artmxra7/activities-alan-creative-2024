

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/pokelist';
import PokemonDetail from './components/pokedetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList/>} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
