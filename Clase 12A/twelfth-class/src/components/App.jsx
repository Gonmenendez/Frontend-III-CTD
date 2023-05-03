import React, { Component } from 'react'
import story from '../images/zombie.PNG'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
        }
    }

    increment = (e) => this.state.counter === 10 ? e.preventDefault() : this.setState({counter : this.state.counter +1})

    decrement = (e) => this.state.counter === 0 ? e.preventDefault() : this.setState({counter : this.state.counter - 1})

    componentDidMount(){
        console.log('All set up!')
    }

    componentDidUpdate(){
        console.log('The item has been updated by incrementing or decrementing the counter');
    }

    render() {
        return (
            <>
                <h1 style={{fontSize : '3rem', margin : '1rem'}}>{this.state.counter}</h1>
                <div style={{margin : '1rem'}}>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
                {(this.state.counter === 0 || this.state.counter === 10) && <img src={story} alt="Zombie story" style={{width : '30%', margin : '1rem'}}/>}
            </>
        )
    }
}
