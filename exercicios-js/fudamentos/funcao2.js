// Armazenando uma funcao em uma variavel (const nesse caso)

const Soma = function (a, b) {
    console.log(a + b)
} 

Soma(2,3)
//5

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {     //function foi substituído por =>
    return a + b
} 

console.log (soma(2, 3)) 
//5

// retorno implícito

const subtração = (a, b) => (a - b)
console.log (subtração(3,2))
//1

const imprimir2 = a => console.log(a)
imprimir2('legal')
//legal