import React from 'react';
import PokemonList from '../PokemonList';

function Home() {
  return (
    <div className="bg-red-800 text-white min-h-screen">
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <img
            src="/images/pokeball.png"
            alt="Pokeball Logo"
            className="h-8 w-8"
          />
          <p className="text-xl font-bold ml-2">pokemon</p>
        </div>
      </nav>
      
      <div className="flex items-center justify-center mb-4" style={{marginRight: "920px"}}> 
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-80 text-black-500 px-2 py-1 rounded-full"
          />
        </div>
      </div>

      <div className='relative bg-black p-4 rounded-lg shadow-md text-black flex flex-col h-full'>
        <PokemonList />
      </div>
    </div>
  );
}

export default Home;
