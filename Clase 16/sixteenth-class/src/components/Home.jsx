import React from 'react'
import { Link, useNavigate, Outlet} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <header>
            <h3>Example using Link feature to redirect</h3>
            <ul>
                <li><Link to='/'>🏠🏠Home🏠🏠</Link></li>
                <li><Link to='/dogs'>🐶🐶Guaguaus🐶🐶</Link></li>
                <li><Link to='/cats'>😸😸Miaumiaus😸😸</Link></li>
            </ul>
            <hr/>
            <h2>✨✨Tenemos✨✨</h2>

            <h3>Example using useNavigate() feature to redirect</h3>
            <p onClick={() => navigate('/')}>🏠🏠Home🏠🏠</p>
            <p onClick={() => navigate('/dogs')}>🐶🐶Guaguaus🐶🐶</p>
            <p onClick={() => navigate('/cats')}>😸😸Miaumiaus😸😸</p>
            <hr/>
            <Outlet/>
        </header>
    )
}



export default Home