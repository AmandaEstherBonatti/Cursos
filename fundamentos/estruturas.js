//If
function boaNota(nota){
    if(nota >= 7){
        console.log(`aprovado com ${nota}`)
    }
}
boaNota(8)

function seForVerdade(valor){
    if(valor){
        console.log(`E verdade... ${valor}`)
    }
}
seForVerdade(true)

function teste(num){
    if(num < 7){
        console.log(num)
        console.log('Final')
    }
}
teste(7)

//If e Else
 const imprimirResultado = function(nota){
     if(nota >= 7){
         console.log('Aprovado')
     }else{
        console.log('Reprovado')
     }
 }
imprimirResultado(10)

//If, If Else e Else
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this<= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperacao')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota invalida')
    }
}
imprimirResultado(7)

//Switch
const imprimirResultaado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inavalido')
    }
}
imprimirResultaado(10)

//While 
function getAleatorio(min, max){
    const valor = Math.random() * (max- min) + min
    return Math.floor(valor)
}

let opcao = -1

while(opcao != -1){
    opcao = getAleatorio(-1, 10)
    console.log(`Opcao escolhida oi ${opcao}`)
}

// Do While 
do{
    opcao = getAleatorio(-1, 10)
    console.log(`Opcao escolhida oi ${opcao}`)
}while(opcao != -1)

//For
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i< notas.length; i++){
    console.log(`Notas = ${notas[i]}`)
}

//For in
for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome:'Sla',
    idade:27
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//Break e continue
const nums = [1,2,3,4,5,6]
for(x in nums){
    if(x ==5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}