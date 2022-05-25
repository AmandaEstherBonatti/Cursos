import React from "react";

/* essa const se chama de stateless componente, ela é utilizada quando mostramos algo estático, que não tem muitas funções próprias
o props são como as propriedades que ela pode receber, como por exemplo o nome que está sendo passando como parâmetro para esse componente*/

const Equipe = (props) =>{
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.fb}/>
            <hr/>
        </div>
    )
}
/*Aqui nós usamos uma amarração para mostrar os dados e ver como é possível passar de componente a componente*/ 
const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    )
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>Youtube </a>
        </div>
    )
}

function stateless() {
    return (
        <div>
            <Equipe nome="Lucas" cargo="Programador" idade="29" fb="https://google.com"/>
            <Equipe nome="Amanda" cargo="Programador" idade="19"/>
        </div>
    );
}

export default stateless;