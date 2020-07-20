// Destructuring na função

// Usando objeto {}
function aleatório({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min // Estudar essa lógica pq ñ entendi!!!
    return Math.ceil(valor)  //Na aula usou .floor mas .ceil tbm funciona...

}
console.log(aleatório({ max: 50, min: 40}))
// Um número aleatório entre 40 e 50

console.log(aleatório({min: 500}))
// Um número aleatório entre 500 e 1000

console.log( aleatório ( {} ) )
// Um número aleatório entre 0 e 1000

console.log( aleatório () ) // Vai dar erro pq está tentando desestruturar algo ñ definido 
//TypeError: Cannot read property 'min' of undefined

//----------------------------------------//------------------------------------------------//

// Usando array []
function aleatório([ min = 0, max = 1000 ]) {
    if (min > max) [min, max] = [max, min] // Estudar essa lógica pq ñ entendi!!!
    const valor = Math.random() * (max - min) + min // Estudar essa lógica pq ñ entendi!!!
    return Math.ceil(valor)  //Na aula usou .floor mas .ceil tbm funciona...

}
console.log(aleatório([40, 50]))
// Um número aleatório entre 40 e 50

console.log(aleatório([500]))
// Um número aleatório entre 500 e 1000

console.log( aleatório ( [] ) )
// Um número aleatório entre 0 e 1000

console.log( aleatório () ) // Vai dar erro pq está tentando desestruturar algo ñ definido 
//TypeError: undefined is not iterable