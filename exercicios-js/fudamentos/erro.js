// Tratamento de erro em Javascript

function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Roberto' } // nome é um erro proposital para a notação ponto ".name"
imprimirNomeGritado(obj)
//TypeError: Cannot read property 'toUppercase' of undefined

// como fazer o tratamento para o caso acima.... 

function tratarErroElancar(erro) {
    //throw new Error('...')
    throw 10
    //throw true
    //throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/

}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' } // Se eu concertar o erro e escrever "name:" o retorono é // Roberto!!! //final
imprimirNomeGritado(obj)
//final
/*
c:\Users\thiag\Documents\GitHub\WebDev-Studies\exercicios-js\fudamentos\tempCodeRunnerFile.js:3
    throw 10
    ^
10
(Use `node --trace-uncaught ...` to show where the exception was thrown)
*/