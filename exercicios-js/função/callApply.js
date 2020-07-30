//----------------------Call & Apply---------------------//

function getPreco(imposto = 0,moeda = 'R$') { //usando parâmetros (imposto e moeda) na função 
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = { 
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //apenas para linkar a função que está fora (ajuda na comprenssão do exercício...)
}

console.log(getPreco()) 
// R$ NaN
// Está retornando 'NaN' pq o 'this' está fora do escopo do objeto definido pela constante 'produto'
// Se eu definir parâmetros globais para 'preco' e 'desc' o 'this' irá encontrálos...

global.preco = 20
global.desc = 0.1
console.log(getPreco())
//R$ 18

console.log(produto.getPreco()) // Aqui estou chamando a constante produto   
//R$ 3900.65

// Executando a partir do call e apply

const carro = { preco: 49990, desc: 0.2} // nova const

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//R$ 39992
//R$ 39992

console.log(getPreco.call(carro, 0.05, 'USD $')) // Modificando os parâmetros 'imposto' e 'moeda'
console.log(getPreco.apply(carro, [0.17, 'USD $'])) // '.aplly' os parâmetros tem que ser entre []
// USD $ 41991.6
// USD $ 46790.64