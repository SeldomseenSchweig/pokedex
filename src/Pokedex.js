import React from 'react';

import Pokecard from "./Pokecard";

const Pokedex = (props) =>{

    const deck = props.pokemons.map(pokemon=> Pokecard(pokemon))
     const cells = deck.map(card => <div className='card'>{card}</div>)
    
    return (
    <div className="container">
        {cells}
      </div>
    )
}


export default Pokedex;