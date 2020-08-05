//---------------Evitando Modificações---------------//

// Object.preventExtensions
// Não permite acrescentar atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log ('Extensível:', Object.isExtensible(produto))
// Extensível: false
// '.isExtensible' testa se o objeto é extensível ou não

produto.nome = 'Borracha' // Modificando o nome isso é ok
produto.descricao = 'Borracha escolar branca' // acrescentando atributo, isso não é ok
delete produto.tag   // deletando atributo, isso é ok
console.log(produto)
// { nome: 'Borracha', preco: 1.99 }

// Object.seal (Não adiciona nem exclui atributos, mas modifica)
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
// Selado: true

pessoa.sobrenome = 'Silva'  // não
delete pessoa.nome          // não
pessoa.idade = 29           //ok
console.log(pessoa)
// { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes (writable: false)
const carro = { montadora: 'Fiat', modelo: 'Palio'}
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro))
// Congelado: true

carro.cor = 'Prata'             // não
delete carro.modelo             // não
pessoa.montadora = 'Chevrolet'  // não
console.log(carro)
// { montadora: 'Fiat', modelo: 'Palio' }