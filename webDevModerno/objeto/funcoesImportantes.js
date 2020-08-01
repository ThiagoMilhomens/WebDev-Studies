//--------------Funções Importantes do Objeto -------------//

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna array das chaves.
// [ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa)) // retorna array dos valores.
// [ 'Rebeca', 2, 13 ]

console.log(Object.entries(pessoa)) // retorna array, com arrays internos contendo chave e valor.
// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]


//.foreach
Object.entries(pessoa).forEach(e => {    //repara que a função => está encapsulada entre()
    console.log(`${e[0]}: ${e[1]}`)     // identificar entre [] posição da chave/valor 
}) 
/*
nome: Rebeca
idade: 2
peso: 13
*/

//.foreach e usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`) 
}) 

/*
nome: Rebeca
idade: 2
peso: 13
*/


//.defineProperty acescenta atributo ao objeto
//repara que os parãmetros estão encapsulados entre() depois da constante 'pessoa'

Object.defineProperty(pessoa, 'dataNascimento', {  
    enumerable: true, 
    writable: false,
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '01/01/1999'
console.log(pessoa.dataNascimento) // ñ muda a data pq foi definido 'writable: false'
// 01/01/2019

console.log(Object.keys(pessoa)) // aparace 'dataNascimento no array pq 'enumerable: true'
// [ 'nome', 'idade', 'peso', 'dataNascimento' ]

// Object.assign (ES6)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) 

Object.freeze(obj)
obj.c = 1234 // ñ  muda valor de 'c' pq congelou na linha acima
console.log(obj)
// { a: 4, b: 2, c: 3 }