import React from 'react';

const Pokecard = (pokemon) =>{


    return (
        <div>
            <h2 className='name'>{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
            <h3 className='type'> {pokemon.type}</h3>
            <h3 className='experience'> EXP: {pokemon.base_experience}</h3>
        </div>
    )
    
    }
    
    export default Pokecard;
