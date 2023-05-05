import React, { useEffect, useState } from 'react'
import PokemonList from './PokemonList'
import PokemonHeader from './PokemonHeader'

const App = () => {
    const [pokedex, setPokedex] = useState([])
    const [displayed, setDisplayed] = useState()
    const [selectedPokemon, setSelectedPokemon] = useState()

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0.')
        .then(res => res.json())
        .then(pokemons => {
            setPokedex(pokemons.results)
        })
    }, [])

    return (
        <div>
            <h1>Pokedex!</h1>
            {selectedPokemon && displayed ? <PokemonHeader selectedPokemon={selectedPokemon}/> : ''}
            {displayed ? <PokemonList pokedex={pokedex} selectPokemon={setSelectedPokemon}/> : ''}
            <button onClick={() => setDisplayed(!displayed)}>{displayed ? 'HIDE POKEMONS' : 'BRING POKEMONS!'}</button>
        </div>
    )
}

export default App
