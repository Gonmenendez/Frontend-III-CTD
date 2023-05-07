import React, { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Pokedex from './Pokedex'
import Moves from './Moves'
import Types from './Types'
import Pokemon from './Pokemon'
import Type from './Type'


const App = () => {
    const [pokedex, setPokedex] = useState()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0.')
        .then(res => setPokedex(res.data.results))
    }, [])

    return (
        <div className='App'>
            <Routes>
                <Route exact path='/' element={<Home/>}>
                    <Route path='/pokedex' element={<Pokedex pokedex={pokedex}/>}>
                        <Route path=':pokemon' element={<Pokemon/>}>
                            <Route path=':moves' element={<Moves/>}/>
                        </Route>
                    </Route>
                    <Route path='/types' element={<Types/>}>
                        <Route path=':type' element={<Type pokedex={pokedex}/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
