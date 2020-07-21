/*/ Tratamento de erro em Javascript

function imprimirNomeGritado(obj) {
    console.log(obj.name.toUppercase() + '!!!')
}

const obj = { nome: 'Roberto' } // nome é um erro proposital para a notação ponto ".name"
imprimirNomeGritado(obj)
//TypeError: Cannot read property 'toUppercase' of undefined

// como fazer o tratamento para o caso acima.... 
*/
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
    console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' } 
imprimirNomeGritado(obj)