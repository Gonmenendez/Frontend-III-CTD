import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='nave'>
            <section className='header'>
                <h1>Pokemon!</h1>
                <Navbar/>
            </section>
            <Outlet/>
        </div>
        <img src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" alt="PokeSite" className='pokesite'/>
        </>
    )
}

export default Home
