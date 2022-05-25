
function tratamento(error){ //exemplo de criar uma function onde recebe o erro como parametro
    throw new Error('...') //podemos retornar o erro com uma mensagem
    throw 10 // um numero
    throw true // com um tipo bool
    throw{ //retornar um obj com as especificacoes
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirGrito(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!')
    }catch(e){
        tratamento(e) //aqui instanciamos nosso metodo
    }finally{ //um bloco opcional para ser colocado no final do tratamento de erro
        console.log('final')
    }
}

const obj = {name:'Amanda'}
imprimirGrito(obj) //instanciando o metodo com o bloco de execoes