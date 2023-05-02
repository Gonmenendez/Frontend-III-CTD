import React, { Component } from 'react'
import {pokeContainer, pokeList, pokeOption} from "../styles/styles"
export default class Pokedex extends Component {

    render() {
        const {updateParent} = this.props
        return (
            //Style JS imported
            <div style={pokeContainer}>
                <h3>POKEDEX</h3>
                <div style={pokeList}>
                    {this.props.pokemons.map(pokemon => (
                    <p key={pokemon.id} onClick={() => updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type, pokemon.base]})} style={pokeOption}>{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}


