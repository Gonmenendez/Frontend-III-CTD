import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Moves = () => {
    const pokemonParams = useParams()
    const pokemon = pokemonParams.pokemon

    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const [pokeMoves, setPokeMoves] = useState([])

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res => setPokeMoves(res.data.moves))
    }, [pokemonUrl])

    return (
        <div className='moves'>
        {pokeMoves.map(pokeMove => <p key={pokeMove.move.name}>{pokeMove.move.name[0].toUpperCase() + pokeMove.move.name.slice(1)}</p>)}
        </div>
    )
}

export default Moves

