// src/components/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    // Fetch basic Pokemon data
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon details', error);
      });

    // Fetch Pokemon species data for description
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then(response => {
        setPokemonSpeciesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon species details', error);
      });
  }, [pokemonName]);

  if (!pokemonData || !pokemonSpeciesData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-center">{pokemonData.name}</h2>
      <div className="flex justify-center items-center">
        <div className="w-full text-center">
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="mx-auto mb-4" />
          <div className="mb-2"><strong>Types:</strong> {pokemonData.types.map(type => type.type.name).join(', ')}</div>
          <div className="mb-2"><strong>Abilities:</strong> {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</div>
          <div className="mb-2"><strong>Height:</strong> {pokemonData.height / 10} m</div>
          <div className="mb-2"><strong>Weight:</strong> {pokemonData.weight / 10} kg</div>

          {/* Statistics Section */}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-xl font-bold mb-2">Statistics</h3>
            {pokemonData.stats.map(stat => (
              <div key={stat.stat.name} className="flex justify-between">
                <span className="font-semibold">{stat.stat.name}:</span>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p className="text-gray-700">{pokemonSpeciesData.flavor_text_entries[0]?.flavor_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
