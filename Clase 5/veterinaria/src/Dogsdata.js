
function DogData (props){
    let dog = props.dog.map((dogAttribute, index) => {
        return(
            <div key={index + 1}>
                <h2>Nombre: {dogAttribute.name}</h2>
                <ul>
                    <li>Edad: {dogAttribute.age}</li>
                    <li>Sexo: {dogAttribute.sex}</li>
                    <li>Raza: {dogAttribute.race}</li>
                    <li>Tamaño: {dogAttribute.size}</li>
                </ul>
            </div>
        )
    })
    return <>{dog}</>
}

export default DogData