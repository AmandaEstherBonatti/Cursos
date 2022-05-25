//Numeros
const peso1 = 1.0
const peso2 = Number('2.0') //funcao de um number para receber uma string e converter para number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // funcao que verifica se e um inteiro

const avaliacao = 9.871
const avaliacao2 = 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // tofixed fala para o resultado quantas casas decimais terei depois da virgula
console.log(media.toString()) // retorna o valor sendo uma string
console.log(media.toString(2)) // ele ira retornar uma string em valor binario
console.log(typeof media) // retrna qual tipo e a minha constante

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) // pow == potencia, math e uma biblioteca do js especifica para solucoes de matematica

console.log(area)

//String
const escola = "Cod3r"

console.log(escola.charAt(3)) // vai apresentar a letra que esta no indice 3
console.log(escola.charCodeAt(3)) // retorna o valor do caracter entro da tabela asp
console.log(escola.indexOf('3')) // vai verifir se existe o index 3 e retornar o seu valor
console.log(escola.substring(1)) // vai pular o primeiro caracter e retorna o restante sem esse caracter
console.log(escola.substring(1)) // vai do indice 0 ate o 3 sem inclui-lo
console.log('escola'.concat(escola).concat("!")) // apresenta no console uma frase junto com a nossa const
console.log(escola.replace(3, 'e')) // ele substitui o 3 pelo e
console.log(escola.replace(/\d/, 'e')) //substitui todos osdigitos pela letra e
console.log('Anada,Maria,Pedro'.split(',')) // cria um array, separando cada indice pela ,


const nome = 'Amanda'
const template =`Ola ${nome}!` // e uma exemplo de tamplete de string, facilita a representcao de texto

console.log(template)
console.log(`1+1 = ${1+1}`) // outro exemplo, sempre e usado crase para esse tipo

const up = texto => texto.toUpperCase() // uma funcao que faz a frase ficar em letra maiuscula

console.log(`Ei...${up('cuidado')}!`) // tbm e permitido usar funcoes dentro dele


//Boolean
let isAtivo = false // existe uma palavra reservada para o literl de falso que podemos atribuir
isAtivo = true

console.log(isAtivo)

isAtivo = 1 // tbm pode ser usado para representar um valor bool
console.log(!!isAtivo) //usado para mostrar o valor, se e usado so um!, ele inverte seu valor, por iso usamos dois

console.log(!!3) // retornaa verdadeiro
console.log(!!-1) // retornar falso
console.log(!!' ') // retornra verdadeiro
console.log(!![]) // array vazio tbm retornara verdadeiroo
console.log(!!{}) // sentido literal vazio tbm retornara verdadeioro
console.log(!!Infinity) // tbm retornara verdadeiro
console.log(!!0) // retornara falso
console.log(!!'') // retornara falso
console.log(!!null) // retornara falso
console.log(!!NaN) // tbm retorna falso
console.log(!!undefined) //tbm retornara falso


//Array
const valores = [7.7, 9.8, 6.3] //criacao de array no seu sentido literal
valores[3] = 10 //adicionamos o numero 10 dentro do indice 3
valores.push({id:3},null,'teste') // esse metodo ira adicionar esses valores dentro do array

console.log(valores[0], valores[3]) // ira representar os valores presentes nesses dois indices
console.log(valores.length) // retorna quantos elementos temos dentro do array
console.log(valores.pop()) // ira excluir o ultimo valor do array
delete valores[0] //ira excluir o valor que estiver no indice 0


//Objeto
const produto = {} //cria um objeto vazio
produto.nome = 'xiaomi'
produto.preco = 2200 //criando atributos a esse objeto
produto['desconto legal'] = 0.40 //atributo com nomeacao com espaco, mas e bom evitar

console.log(produto)

const produto2 ={
    nome:'camisa polo',
    preco: 50,
    tamanho:{ //podemos adicionar varios objetos dentro de um e mais seus atributos
        pequeno: 'p',
        medio = 'm'
    }
}// outra forma de declarar um objeto com seus atrubutos

console.log(produto2)




