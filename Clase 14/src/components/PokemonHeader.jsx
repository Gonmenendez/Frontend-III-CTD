import React, { useEffect, useState } from 'react'

const PokemonHeader = ({selectedPokemon}) => {
    const [pokemonImg, setPokemonImg] = useState()
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
        .then(res => res.json())
        .then(pokemonData => setPokemonImg(pokemonData.sprites["front_default"]))
    },[selectedPokemon])

    return (
        <header>
            <h2 className='selected'>{selectedPokemon.name[0].toUpperCase() + selectedPokemon.name.slice(1)}</h2>
            <img src={pokemonImg} alt={selectedPokemon.name} />
        </header>
    )
}

export default PokemonHeader