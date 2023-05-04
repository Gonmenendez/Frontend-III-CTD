import React from 'react'
import '../styles/Shop.css'

const Header = ({total}) => {

  return (
    <div className='header'>
        <h2>Bienvenidos al pokeShop!</h2>
        <h4>Productos seleccionados: {total.stock}</h4>
        <h4>Precio total: ${total.precio}</h4>
    </div>
  )
}

export default Header