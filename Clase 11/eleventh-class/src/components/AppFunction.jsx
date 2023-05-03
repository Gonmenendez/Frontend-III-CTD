import React, {useState} from 'react'
import Swal from 'sweetalert2'

/*
const Rejuvenecedor = () => {
    //In this case we initialize every state instance separately so we can make
    //the subsequent code easier just by calling the name of each state instance
    //such as name, age, ageError and NameError
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [age, setAge] = useState('')
    const [ageError, setAgeError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name === '' && (parseInt(age) < 10)){
            setNameError(true)
            setAgeError(true)
        } else if (name === '' && (parseInt(age) >= 10)){
            setNameError(true)
        } else if (name !== '' && (parseInt(age) < 10)){
            setAgeError(true)
        } else {
            Swal.fire('Hi ' + name + "! Your new age is: " + (age - 10) + '. Congrats!')
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                {nameError && <span>This field cannot be empty</span>}
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input type="number" id="age" value={age} onChange={(e) => {setAge(e.target.value)}}/>
                {ageError && <span>This field can't be empty and you must be at least 10 years old</span>}
            </div>
            <button type='submit'>Submit!</button>
        </form>
    )
}

export default Rejuvenecedor
*/

const Rejuvenecedor = () => {
    //In this case we initialize 2 state instances (but we could put them all
    //in one) in order to make the code more organized. In this way, code is
    //a little longer and it's similar to class components. Note how we also need
    //spread operator when modifying just one state property (object value),
    //otherwise it would set the hole object to the only state property being
    //modified, deleting every other properties
    const [nameState, setNameState] = useState({
        name : '',
        nameError : false
    })
    const [ageState, setAgeState] = useState({
        age : '',
        ageError : false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nameState.name === '' && ((parseInt(ageState.age) < 10) || ageState.age === '')){
            setNameState({...nameState, nameError : true})
            setAgeState({...ageState, ageError : true})
        } else if (nameState.name === '' && (parseInt(ageState.age) >= 10)){
            setNameState({...nameState, nameError : true})
        } else if (nameState.name !== '' && ((parseInt(ageState.age) < 10) || ageState.age === '')){
            setAgeState({...ageState, ageError : true})
        } else {
            Swal.fire('Hi ' + nameState.name + "! Your new age is: " + (ageState.age - 10) + '. Congrats!')
            setNameState({...nameState, name : ''})
            setAgeState({...ageState, age : ''})
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={nameState.name} onChange={(e) => {setNameState({name : e.target.value, nameError : false})}}/>
                {nameState.nameError && <span>This field cannot be empty</span>}
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input type="number" id="age" value={ageState.age} onChange={(e) => {setAgeState({age : e.target.value, ageError : false})}}/>
                {ageState.ageError && <span>This field can't be empty and you must be at least 10 years old</span>}
            </div>
            <button type='submit'>Submit!</button>
        </form>
    )
}

export default Rejuvenecedor