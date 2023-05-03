import React from 'react'
import Swal from 'sweetalert2'

export default class Rejuvenecedor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            nameError : false,
            age : '',
            ageError : false
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name : e.target.value,
            nameError : false
        })
        console.log('Name input has been updated!');
    }

    handleAgeChange = (e) => {
        this.setState({
            age : e.target.value,
            ageError : false
        })
        console.log('Age input has been updated!');
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.name === '' && ((parseInt(this.state.age) < 10) || this.state.age === '')){
            this.setState({nameError : true})
            this.setState({ageError : true})
        }else if (this.state.name === '' && (parseInt(this.state.age) >= 10)){
            this.setState({nameError : true})
        } else if (this.state.name !== '' && ((parseInt(this.state.age) < 10) || this.state.age === '')){
            this.setState({ageError : true})
        } else {
            Swal.fire('Hi ' + this.state.name + "! Your new age is: " + (this.state.age - 10) + '. Congrats!')
            this.setState({name : ''})
            this.setState({age  : ''})
        }
    }

    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange}/>
                    {this.state.nameError && <span>This field cannot be empty</span>}
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" value={this.state.age} onChange={this.handleAgeChange}/>
                    {this.state.ageError && <span>This field can't be empty and you must be at least 10 years old</span>}
                </div>
                <button type='submit'>Submit!</button>
            </form>
        )
    }
}
