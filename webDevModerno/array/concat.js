//-------------Concat---------------//
//O método 'concat()' retorna um novo array contendo todos os arrays ou valores passados como parâmetro
//tem somente 1 parâmetro, valonN (Arrays ou valores para concatenar (unir) ao array retornado)

const filhas = ['Maria', 'Ana']
const filhos = ['João', 'Pedro']

const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)
// [ 'Maria', 'Ana', 'João', 'Pedro' ] [ 'Maria', 'Ana' ] [ 'João', 'Pedro' ]

console.log(['a','b'].concat([1, 2],[3, 4], 5,[[6, 7]]))
// [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]