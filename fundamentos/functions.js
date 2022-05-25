//Funcao sem retorno
function imprimirSoma(a, b){  //assum declaramos um metodo, e suas entradas de parametros n precisam ter tipo
    console.log(a + b)
}
 imprimirSoma(2,3) //declaramos nosso metetodo e passamos os parametros, tbm  podemos passar so um numero como parametro

 //Funcao com retorno
 function soma(a, b=0){
     return a + b
 }

 console.log(soma(2,3)) //passamos o metodo dessa forma para poder imprimi-lo dentro do console

//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a,b){ // e possivel declarar uma variavel sendo um metodo
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma =(a, b) =>{ //utilizando o metodo entro de uma const mas com a diferenca de usar uma arrow function ao inves de uma function
    return a + b
}

console.log(soma(2,3))

//Retorno implicito
const subtracao = (a, b) => a -b  // utilizando uma forma mais simplificada de arrow

console.log(subtracao(2,3))

//funcao com array
const funcs = []

for(let i = 0; i < 10; i++){ // difereca de var, e que fora do  for, ele n guarda o valorda variavel no array e o let faz exatamente iss
    funcs.push(function(){
        console.log(i)
    })
} // esse for ira adicionar os numeros no nosso vetor, ao mesmo tempo que o apresenta no console

//Funcao com instanciamento
function obj(nome){
    this.nome = nome
}
const ob2 = new obj('mesa')
console.log(ob2.nome)