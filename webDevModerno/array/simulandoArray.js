//---------------Simulando Array com Objeto---------------//

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
// { '0': 'rafael', '1': 'Ana', '2': 'Bia' }

// usando '.tostring' para simular impressão no console como array

// criando um objeto que representa todos os atributos de '.toString'
Object.defineProperty(quaseArray, 'toString', {      // atributo 'toString' será uma função
    value: function() { return Object.values(this)}, // 'value:' '(this)' DEU NÓ NA CABEÇA!!!kkk 
    enumerable: false    // setando false para não imprimir [Function: value]
})

console.log(quaseArray[0]) //lembrando que em objetos também acessamos atributos entre []
// Rafael

const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray) 
// [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]

// Preciso estudar a mecânica do objeto (value: / enumerable:), e entender essa função aí em cima...  