import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Cats from './Cats'
import Dogs from './Dogs'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='cats' element={<Cats/>}/>
                    <Route path='dogs' element={<Dogs/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
