import React from 'react'

const Header = ({selectedHero}) => {
    return (
        <header>
            <h1>Superheroes!</h1>
            <h2>Selected hero: {selectedHero.superhero}</h2>
        </header>
    )
}

export default Header