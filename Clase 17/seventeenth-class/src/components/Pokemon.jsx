import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const Pokemon = () => {
    const pokeParams = useParams()

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokeParams.pokemon}`

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
    }, [pokemonUrl])

    return (
        <div className='pokemon'>
            <h2>{pokeParams.pokemon[0].toUpperCase() + pokeParams.pokemon.slice(1)}</h2>
            <img src={pokemon?.sprites.front_default} alt={`${pokeParams.pokemon[0].toUpperCase() + pokeParams.pokemon.slice(1)}`}/>
            <Link to={'moves'} className='movesBtn'>Moves</Link>
            <Outlet/>
        </div>
    )
}

export default Pokemon
