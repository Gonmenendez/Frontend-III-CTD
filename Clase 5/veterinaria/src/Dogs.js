import DogData from "./Dogsdata"

let dogs = [
    {
        name : 'Firulais',
        age : 11,
        sex : 'Macho',
        race : 'Pastor alemán',
        size : 'Grande'
    },
    {
        name : 'Maya',
        age : 13,
        sex : 'Hembra',
        race : 'Pug',
        size : 'Chico'
    },
    {
        name : 'Pipo',
        age : 5,
        sex : 'Macho',
        race : 'Schnauzer',
        size : 'Mediano'
    },
    {
        name : 'Pacha',
        age : 2,
        sex : 'Hembra',
        race : 'Mestizo',
        size : 'Grande'
    },
]


function Dogs(){
    return(
        <>
            <h1>Clientes caninos de Veterinaria</h1>
            <DogData dog={dogs}/>
        </>
    )
}

export default Dogs