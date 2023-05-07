import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Type = ({pokedex}) => {
    const typeParams = useParams()
    const pokemons = pokedex.map(pokemon => pokemon.name)
    const [displayed, setDisplayed] = useState(false)
    const [arrayShow, setArrayShow] = useState([])
    let pokeData = []


    function getTypes (types){
        let pokemonTypes = []
        types.map(type => pokemonTypes.push(type.type.name))
        return pokemonTypes
    }

    useEffect(() => {
        pokemons.map(pokemon => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                pokeData.push({
                    name : res.data.name,
                    types : getTypes(res.data.types)
                })
            })
        })
    })

    // console.log(typeParams.type);
    function includes (){
        if(pokeData.length > 20){
            let slice = pokeData.slice(0, 20)
            let filteredPokemons = []
            slice.map(pokemon => pokemon.types.includes(typeParams.type)? filteredPokemons.push(pokemon.name) : '')
            setArrayShow(filteredPokemons)
        } else {
            let filteredPokemons = []
            pokeData.map(pokemon => pokemon.types.includes(typeParams.type)? filteredPokemons.push(pokemon.name) : '')
            setArrayShow(filteredPokemons)
        }
    }

    return (
        <div className='a'>
            <p className='button' onClick={() => {includes(); setDisplayed(!displayed)}}>{displayed ? 'Show less' : 'Show'}</p>
            {displayed ? (arrayShow.length > 0 ? <div className='filteredPokemons'>{arrayShow.map(poke => <p>{poke[0].toUpperCase() + poke.slice(1)}</p>)}</div> : <p>The list is too short and we couldn't find any pokemon matching this type. Try asking for more in the API</p>) : ''}
        </div>
    )
}

export default Type
