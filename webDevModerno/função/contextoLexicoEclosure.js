//----------------------Contexto léxico---------------------//

const moradia = 'Planeta Terra'

function localizacao() {
    console.log(moradia)
} 

function procurando() {
    const moradia = 'Brasil'
    localizacao()
}

procurando()
// Planeta Terra

//----------------------Closures---------------------//

//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação! 
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
//Local
