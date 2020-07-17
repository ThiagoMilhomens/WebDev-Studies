//Hoisting

console.log('a =', a)
var a = 2
console.log('a =', a)
//a = undefined
//a = 2

/* obs: Javascript "içou" a var para o topo ao declarar undefined, ou seja, 
reconhece que ela existe, o esperado seria dar erro, coisas de js...
Ñ acontece se usar let, ñ é recomendável utilizar-se do hoisting 
e raramente se encontra em outras linguagens*/