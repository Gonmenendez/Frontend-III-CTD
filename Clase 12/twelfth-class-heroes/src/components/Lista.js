import React from 'react'

const Lista = ({heroes, selectHero}) => {
    return (
        <div>
            {heroes.map(hero => <p key={hero.superhero} onClick={() => selectHero(hero)}>{hero.superhero}</p>)}
        </div>
    )
}

export default Lista