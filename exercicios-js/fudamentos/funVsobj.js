console.log(typeof Object)
console.log(typeof new Object)
//function
//object

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
//function
//object

class Produto {} // class é nova sintaxe ES6 2015  que cria uma função
console.log(typeof Produto)
console.log(typeof new Produto()) // () ñ precisa, apenas para provar que está chamando função 
//function
//object