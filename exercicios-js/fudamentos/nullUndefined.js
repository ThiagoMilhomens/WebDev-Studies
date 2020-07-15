let valor // nao inicializada

console.log(valor)
// undefined

console.log(valor2) // valor2 sequer foi declarado
// Erro - valor2 is not defined 

valor = null // ausencia de valor nao aponta para nenhum objeto na memória

console.log(valor)
// null

//----------------------------------//------------------------------------//

const produto = {}
console.log(produto.preco)
//undefined
console.log(produto)
//{}
produto.preco = 3.50

console.log(produto)
//{ preco: 3.5 }

produto.preco = undefined //Evite atribuir undefined! melhor seria null ou 0 neste caso de valor numérico
console.log(!!produto.preco) //conversao para boolean
//false
console.log(produto)
//{ preco: undefined }
// Ou seja nao faz com que o objeto deixe de ter um atributo...Melhor seria como a seguir.
delete produto.preco
console.log(produto) // devolverá um objeto vazio
// {}

produto.preco = null // sem preço 
console.log(!!produto.preco)
//false
console.log(produto) 
//{ preco: null }