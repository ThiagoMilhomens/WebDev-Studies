//-------------Map #02---------------//
// Desafio pegar somente os preços dos produtos(em JSON) no carrinho

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// construindo as constantes que receberão funções para modificar os elementos em 'carrinho'
const paraObjeto = json => JSON.parse(json) //transformando JSON em objeto
const apenasPreco = produto => produto.preco //retornado o valor da chave 'preco'

// construindo a constante(resultado) que receberá o novo array extraído de 'carrinho' pela função '.map' 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
// [ 3.45, 13.9, 41.22, 7.5 ]