//Atribuicao
const a = 2
let b = 4

b += a // b = b + a

b -= a // b = b - a

b *= a // b = b * a

b /= a // b = b / a

b %= a // b = b % a

//Destructuring obj
const pessoa ={
    nome:'Ana',
    idade:10,
    endereco:{
        lograouro:'ruaABC',
        numero:'111'
    }
}

const { nome, idade} = pessoa // vamos retirar de dentro do objeto pessoa, esses dois atributos
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //aqui colocmos o atributo do objeto dentro de outra variavel
console.log(n, i)

const {endereco: {lograouro, numero}} = pessoa //extraimos o outro objeto que esta dentro do nosso obj principal

//Destructuring Array
const [a] = 10

const [n1, n3, n5, n6 = 0] = [10, 7, 9, 8] //aqui extraimos e podemos atribuir valoress ao vetor ao mesmo tempo

const [, [, nota]] = [[,8,8],[9,6,8]] // aqui falamos que ignoramos o primeiro array e apresentamos so o segundo
console.log(nota)

//Destructuring com function
function rand({min = 0, max = 1000}){ //aqui declaramos que nossos parametros vao ser os atributos de um objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({min:20,max:50})) // assim e a sintaxe para a representacao no console

//Destructuring com function + array
function rand ([min = 0, max = 1000]){ //aqui criamos um array de dois indice como entrada de parametros
    if(min > max) [min,max] = [max,min] //aqui trocamos de posicao os dois
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
console.log(rand([50,40])) //por ser um array, n precisamos usar os nomes dos indices

//Termario
const resultad = nota => nota>= 7 ? 'Aprovado':'Reprovado' //onde usamos uma arrow paa definir dois valores sobre um
const status = nota >= 7 ? 'Aprovado':'Reprovado' //outro exemplo
console.log(resultad(10))