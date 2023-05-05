import React from 'react'

const PokemonList = ({pokedex, selectPokemon}) => {
    return (
        <div>
            <h2>Select a pokemon from this pokedex:</h2>
            {pokedex.map(pokemon => <p key={pokemon.name} onClick={() => selectPokemon(pokemon)}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>)}
        </div>
    )
}

export default PokemonList