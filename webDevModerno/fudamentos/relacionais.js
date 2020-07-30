//Operadores relacionais servem para fazer comparações, sempre o resultado será true ou false

console.log ('1' == 1) // == (igual) compara valor, resultado verdadeiro 
console.log ('1' === 1) // === (estritamente igual) compara tipo, resulatdo falso pq um é string e outro é number
//true 
//false 

console.log ('3' != 3) // != (diferente) compara valor, resultado falso 
console.log ('3' !== 3) // !== (estritamente diferente) compara tipo, resulatdo verdadeiro pq um é string e outro é number
//false
//true

console.log( 3 < 2)   // menor que
console.log( 3 > 2)   // maior que
console.log( 3 <= 2)  //menor ou igual
console.log( 3 >= 2)  //maior ou iguaç
//false
//true
//false
//true

const d1 = new Date(0) // Em js Date(0) é um data de referência pré-definida = 01/01/1970 
const d2 = new Date(0)

console.log(d1 === d2)
console.log(d1 == d2)  
//false
//false
//Retorna falso pq está comparando endereço de memória????

console.log(d1.getTime == d2.getTime)
console.log(d1.getTime === d2.getTime)
//true
//true
//Retorna true pq está comparando um number gerado por .getTime

console.log(undefined == null)
console.log(undefined === null)
//true
//false 
// Por isso é reconmendável neste caso utilizar ===