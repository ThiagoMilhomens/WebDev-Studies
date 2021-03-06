 //-------------Filter #01---------------//
// Filtra o array devolvendo OUTRO array com os elementos que tenham as características que procuramos
// Difrente de 'map' que retorna um array com o mesmo número de elementos, porém com modificações, função 'filter' pode retornar quantidade menor de elementos, sem modificações.
//Tem 4 parâmetros, função callback (value, index, array) e this (que é opcional))

 
 
 const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true },
     { nome: 'Ipad Pro', preco: 4199, fragil: true },
     { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
     { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
 ]

 console.log(produtos.filter(function(p){ // 'p' primeiro parâmetro 'callback'
     return p.preco >= 500 & p.fragil
 } ))
/*
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true }
]
*/

 const prodCaro = produto => produto.preco >= 500
 const prodFragil = produto => produto.fragil 
 // repare que por 'fragil' ser uma chave com valor bollean, não necessita de operador.

 console.log(produtos.filter(prodCaro).filter(prodFragil))
 /*
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true }
]
*/