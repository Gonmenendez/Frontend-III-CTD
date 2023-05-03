import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            order : '',
            shown : true
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({order : 'pizza'})
        }, 2000);
    }

    componentDidUpdate(){
        console.log('El componente se ha actualizado!');
        console.log('Component has been updated!');
    }

    cancelOrder = () => this.setState({shown : false})

    render(){
        let myOrder;
        if (this.state.shown){
            myOrder = <YourOrder food={this.state.order}/>
        }
        return(
            <div>
                {myOrder},
                <button type='button' onClick={this.cancelOrder}>Cancelar pedido / Cancel order</button>
            </div>
        );
    }
}

class YourOrder extends React.Component {
    componentWillUnmount(){
        alert('Tu pedido fue cancelado - Your order has been canceled')
    }

    render(){
        return(
            <h1>Tu pedido / Your order: {this.props.food}</h1>
        )
    }
}