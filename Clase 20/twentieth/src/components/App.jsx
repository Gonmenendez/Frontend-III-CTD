import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Pokemon from './Pokemon'
import Navbar from './Navbar'
import Search from './Search'
import "../styles/global.css"

const App = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/pokemon/search" element={<Search/>} />
                <Route path="/pokemon/:id" element={<Pokemon/>} />
            </Routes>
        </>
    )
}

export default App