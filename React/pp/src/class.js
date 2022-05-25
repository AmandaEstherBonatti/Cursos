import React, { Component } from 'react';

/** aqui ele já tem props implementado dentro dele */
class Equipe extends Component {
    render() {
        return (
            <div>
               <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
               <hr/>
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}
function Class() {
    return (
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Amanda" cargo="Programador" idade="20" />
            <Equipe nome="Lucas" cargo="Programador" idade="21" />
        </div>
    );
}

export default App;