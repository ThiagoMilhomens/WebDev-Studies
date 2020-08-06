//---------------Array: Visão Geral---------------//

//Array é um objeto em JS, mas em vez de usar chave para os atributos ele usa index começando em 0.
//Ao contrário de objetos cujo atributos estão entre {}, no array os elementos  estão entre [].
//É uma estrutura dinâmica, podem aumentar ou diminuir o número de elemntos contidos
//É uma estrutura heterogênea, recebe dados variados como número, string, bollean, objeto, outro array...   
//Embora heterogêneo a boa prática não recomenda misturar diferentes tipos de dados no array

console.log(typeof Array, typeof new Array, typeof [])
// function object object

// Criando Array usando 'new' >> não recomendável
let aprovados = new Array('Bia', 'Carlos', 'Ana') //'Array' é função, então elementos entre ()
console.log(aprovados)
// [ 'Bia', 'Carlos', 'Ana' ] 

// Criando Array de forma literal >> recomendável
aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)
// [ 'Bia', 'Carlos', 'Ana' ] 
console.log(aprovados[0]) // chamando pelo índice 
// Bia
console.log(aprovados[1])
// Carlos
console.log(aprovados[2])
// Ana
console.log(aprovados[3]) // não dá erro
// undefined
//console.log(aprovados[]) // erro, se usar [] obrigatório apontar o índice
// SyntaxError: Unexpected token ']'

// Adicionando elementos
aprovados[3] = 'Paulo' // "substituindo" de undefined para 'Paulo'
aprovados.push('Roberto') // função '.push' acrescenta novo elemento (index [4])
console.log(aprovados.length) // '.length' confere o tamanho do array em index 
// 5

aprovados[9] = 'Rafael'// acrescenta elementos indefinidos [5] [6] [7] [8]
console.log(aprovados.length)
// 10
console.log(aprovados)
/*
[
  'Bia',
  'Carlos',
  'Ana',
  'Paulo',
  'Roberto',        // entrou via '.push'
  <4 empty items>,  // repare no retorno indefinido...
  'Rafael'
]
*/
aprovados.sort() // Função '.sort()' altera e reordena (alfabeticamente nesse caso) o array 
console.log(aprovados)
/* 
[
  'Ana',
  'Bia',
  'Carlos',
  'Paulo',
  'Rafael',
  'Roberto',
  <4 empty items>
]
*/

delete aprovados[1] // exclui o elemento mas não o índice(tornando undefined).

console.log(aprovados[1])
console.log(aprovados[2])
// undefined
// Carlos

// Função '.splice()' adiciona, remove , adiciona e remove ao mesmo tempo com parâmetros entre ()

//Removendo com '.splice()'
 aprovados = ['Bia', 'Carlos', 'Ana', 'Paulo']

 // Primeiro param '1'(altura do index), segundo param '2'(quantd de index's excluídos, incluindo '1')
aprovados.splice(1, 2) 
console.log(aprovados)
// [ 'Bia', 'Paulo' ]

//Substituindo com '.splice()'
aprovados = ['Bia', 'Carlos', 'Ana', 'Paulo']

aprovados.splice(1, 2, 'substCarlos', 'substAna' ) // substituindo pelos excluídos 
console.log(aprovados)
// [ 'Bia', 'substCarlos', 'substAna', 'Paulo' ]

// Acrescentando com '.splice()'
aprovados.splice(3, 0, 'maisUm', 'maisOutro') //só deixar segundo param '0'
console.log(aprovados)
// [ 'Bia', 'substCarlos', 'substAna', 'maisUm', 'maisOutro', 'Paulo' ]

