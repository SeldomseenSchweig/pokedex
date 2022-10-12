import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Pokecard.css';
import './Pokedex.css';

import Pokedex from './Pokedex';
import Pokemons from './Pokemons';
import Pokecard from './Pokecard';

function App() {
  return (
    <> 
      <Pokedex pokemons={Pokemons}/>
    </>
  );
}

export default App;
