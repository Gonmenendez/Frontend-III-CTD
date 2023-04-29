import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
  constructor(props){
    super(props);

    this.state = {
      coloring : this.colors,
    }

    this.shuffle = this.shuffle.bind(this)
  }


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
  shuffle(){
    let newArray = this.state.coloring
    for(let i = newArray.length - 1; i > 0; i--){
      const selectedIndex = Math.floor(Math.random() * (i + 1))
      const temporary = newArray[i]
      newArray[i] = newArray[selectedIndex]
      newArray[selectedIndex] = temporary
    }
    this.setState({coloring : newArray}) 
  }


  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle}/>
      </div>
    )
  }
}
