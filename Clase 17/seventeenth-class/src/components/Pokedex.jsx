import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Pokedex = ({pokedex}) => {
    return (
        <>
            <div className='pokedex'>
                {pokedex.map(pokemon => <Link to={`${pokemon.name}`} key={pokemon.name} className='pokemons'>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Link>)}
            </div>
            <Outlet/>
        </>
    )
}

export default Pokedex
