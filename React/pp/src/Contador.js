import React, { Component } from 'react'

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Lucas',
            contador: 0
        };

        this.diminuir = this.diminuir.bind(this);
        this.aumentar = this.aumentar.bind(this);
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('OPa chegou a zerp!')
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }
     aumentar(){
         let state = this.state;
         state.contador += 1;
         this.setState(state)
     }

    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default App;