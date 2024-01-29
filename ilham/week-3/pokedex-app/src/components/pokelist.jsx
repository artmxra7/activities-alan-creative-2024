// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [displayedPokemonList, setDisplayedPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterElement, setFilterElement] = useState('');
  const [expandedPokemon, setExpandedPokemon] = useState(null);
  const [visibleItemCount, setVisibleItemCount] = useState(24);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemonList(response.data.results);
        setDisplayedPokemonList(response.data.results.slice(0, visibleItemCount));
      })
      .catch(error => {
        console.error('Error fetching Pokemon list', error);
      });
  }, [visibleItemCount]);

  const getPokemonNumber = (pokemon) => {
    if (pokemon && pokemon.url) {
      const urlParts = pokemon.url.split('/');
      const pokemonNumber = urlParts[urlParts.length - 2];
      return pokemonNumber && pokemonNumber !== 'null' ? pokemonNumber : null;
    }
    return null;
  };  
  
  
  const filterPokemon = async () => {
    let filteredList = [...pokemonList];
  
    if (searchTerm) {
      filteredList = filteredList.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    }
  
    if (filterElement) {
      try {
        const detailedList = await Promise.all(
          filteredList.map(async (pokemon) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            return response.data;
          })
        );
  
        const filteredDetailedList = detailedList.filter(
          (pokemon) => pokemon.types.some((type) => type.type.name === filterElement)
        );
  
        setDisplayedPokemonList(filteredDetailedList.slice(0, visibleItemCount));
      } catch (error) {
        console.error('Error fetching detailed Pokemon information', error);
      }
    } else {
      setDisplayedPokemonList(filteredList.slice(0, visibleItemCount));
    }
  };
  
  useEffect(() => {
    filterPokemon();
  }, [searchTerm, filterElement, visibleItemCount, pokemonList]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilter = (value) => {
    setFilterElement(value);
  };

  const handleExpand = (pokemonName) => {
    setExpandedPokemon(pokemonName === expandedPokemon ? null : pokemonName);
  };

  const handleLoadMore = () => {
    setVisibleItemCount(prevCount => prevCount + 24);
  };

  const handleSelectPokemon = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div className="bg-red-700 p-4 min-h-screen">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Pokemon..."
          className="p-2 bg-slate-700 text-white rounded"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="text-white mr-2">Filter by Element:</label>
        <select
          className="p-2 bg-slate-700 text-white rounded"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedPokemonList.map((pokemon) => (
          <div key={pokemon.name} className="cursor-pointer relative" onClick={() => handleSelectPokemon(pokemon.name)}>
            <div className={`bg-gray-200 p-4 rounded-md flex flex-col items-center ${expandedPokemon === pokemon.name ? 'expanded' : ''}`} onClick={() => handleExpand(pokemon.name)}>
              <span className="absolute top-0 right-0 text-xs text-gray-500 mt-1 mr-1">{getPokemonNumber(pokemon)}</span>
              {getPokemonNumber(pokemon) && (
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonNumber(pokemon)}.png`} alt={pokemon.name} className="mb-2" />
)}
              <div className="text-center">{pokemon.name}</div>
              {pokemon.types && (
                <div className="flex mt-2">
                  {pokemon.types.map((type, index) => (
                    <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md mr-2">
                      {type.type.name}
                    </span>
                  ))}
                </div>
              )}
              {expandedPokemon === pokemon.name && (
                <div className="text-sm mt-2">
                  <p>Pokedex Number: {getPokemonNumber(pokemon)}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {displayedPokemonList.length < pokemonList.length && (
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PokemonList;