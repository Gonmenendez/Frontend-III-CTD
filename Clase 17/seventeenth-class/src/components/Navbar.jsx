import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <Link to={'/'} className='headerSections'><h2>Home</h2></Link>
            <Link to={'/pokedex'} className='headerSections'><h2>Pokedex</h2></Link>
            <Link to={'/types'} className='headerSections'><h2>Pokemon types</h2></Link>
        </nav>
    )
}

export default Navbar
