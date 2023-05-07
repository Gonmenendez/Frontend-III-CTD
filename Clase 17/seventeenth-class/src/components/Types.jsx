import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Types = () => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypes(res.data.results))
    }, [])

    return (
        <>
        <div className='pokemonTypes'>
            {types.map(type => <><Link to={`${type.name}`} key={type.name} className='type'>{type.name[0].toUpperCase() + type.name.slice(1)}</Link><br/></>)}
        </div>
        <Outlet/>
        </>
    )
}

export default Types
