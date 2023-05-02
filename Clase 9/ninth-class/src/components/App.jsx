import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokedex from '../pokedex.json'
import * as styles from '../styles/styles'


// AREA DE TRABAJO --> Reemplazar por el JSON
/*
The following array will be replaced by the pokedex imported from JSON. We're importing it and defining it directly into the state as pokemons : pokedex
const pokedex = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }]*/
// AREA DE TRABAJO -----------------------------------


export default class App extends Component {

  // AREA DE TRABAJO --> Usar estructura de Class Component
  constructor(props){
    super(props);
    this.state = {
      pokemon : [pokedex[0].name, pokedex[0].id, pokedex[0].type, pokedex[0].base],
      pokemons : pokedex,
    }

    this.update = this.update.bind(this)
  }
  // AREA DE TRABAJO -------------------------------------------


  update(pokemon) {
    console.log(pokemon);
    // En esta funcion se deberia actualizar el pokemon visible
    // No olvidemos que si es funcion debemos bindearla... como podemos evitar usar el bind?
    this.setState(pokemon)
  }

  getPokemon = () => {
      if (this.state.pokemon[1]?.toString()?.length === 1) return `00${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 2) return `0${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 3) return `${this.state.pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    if(this.state.pokemon[2].length === 1) return this.state.pokemon[2][0]
    if(this.state.pokemon[2].length > 1) {
      for (let index = 0; index < this.state.pokemon[2].length; index++) {
        if(index === 0) phrase = this.state.pokemon[2][index]
        if(index !== 0) phrase = `${phrase} and ${this.state.pokemon[2][index]}`
      }
      return phrase
    }
  }

  render() {
    /* AREA DE TRABAJO
    Pueden usar desestructuracion o directamente modificar las variables this.pokemon por this.state...
    */

    return (
      //Style JS in-line AND Styles CSS 
      //<div style={{display:"flex"}}>
      //<div className="container">
      <div style={styles.flexDiv}>
      <div className='container' >
        <ul style={styles.list}>
          <li>{`HP: ${this.state.pokemon[3].HP}`}</li>
          <li>{`Attack: ${this.state.pokemon[3].Attack}`}</li>
          <li>{`Defense: ${this.state.pokemon[3].Defense}`}</li>
          <li>{`Special Attack: ${this.state.pokemon[3]['Sp. Attack']}`}</li>
          <li>{`Sprecial Defense: ${this.state.pokemon[3]['Sp. Defense']}`}</li>
          <li>{`Speed: ${this.state.pokemon[3].Speed}`}</li>
        </ul>
        <img id="pokemonImage" style={styles.pokemonImg} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.state.pokemon[0]} />
        <p id="pokeName" style={styles.name}>{`${this.state.pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.state.pokemons} />
    </div>
    )
  }
}


