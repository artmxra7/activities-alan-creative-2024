// PokemonCard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const PokemonCard = ({ pokemonUrl, index }) => {
  const [pokemon, setPokemon] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(pokemonUrl);
      setPokemon({ 
        ...result.data, 
        stats: result.data.stats.slice(0, 5) 
        
        });
    };

    fetchData();
  }, [pokemonUrl]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=''>
      <div className="m-2 max-w-xs flex-shrink-0">
        <div className="relative bg-white p-4 rounded-lg shadow-md text-black flex flex-col h-full">
          <h3 className="font-semibold mb-2 truncate">#{index + 1}</h3>
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            className="mx-auto mb-2 max-h-40"
            onClick={openModal}
          />
          <h3 className="text-sm font-semibold mb-2 truncate">{pokemon.name}</h3>
        </div>
      </div>

      {/* Modal */}
      <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="rounded-lg bg-white"
            style={{
            content: {
                width: '300px', 
                height: 'auto', 
                margin: 'auto', 
                marginTop: '30px', 
            },
            }}
        >
            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'center' }}>
                {pokemon.name}
            </h2>
            <button className='bold ' onClick={closeModal} style={{ color: 'red', fontWeight: 'bold', marginLeft: '250px' }}>
                X
            </button>

            
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} style={{ width: '100%', height: 'auto' }} />

            <ul>
                {pokemon.stats?.map((stat, index) => (
                    <li key={index} >
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
            

      </Modal>
    </div>
  );
};

export default PokemonCard;
