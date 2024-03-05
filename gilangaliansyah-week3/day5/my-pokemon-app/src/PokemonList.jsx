import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=60'
      );
      setPokemonData(result.data.results);
    };

    fetchData();
  }, []);

  return (
        <div className="grid grid-cols-10 gap-1">
        {pokemonData.map((pokemon, index) => (
            <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} index={index} />
        ))}
        </div>
  );
};

export default PokemonList;