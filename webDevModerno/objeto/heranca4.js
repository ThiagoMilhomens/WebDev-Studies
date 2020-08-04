//---------------Herança #04---------------//

function MeuObjeto() {} // funçâo construtora
console.log(MeuObjeto.prototype)
// MeuObjeto {}


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) 
// true
console.log(MeuObjeto.prototype === obj1.__proto__)
// true

// confirmamos acima que os objetos criados apontam para o mesmo protótipo 

/* Quando vc cria um objeto a partir de uma função construtora usando 'new', o protótipo desse novo objeto automaticamente aponta  pra a função que vc criou('MeuObjeto.prototye' no caso acima). Importante! Esse exemplo de objeto criado apartir de FUNÇÃO CONSTRUTORA! é diferente de 'Oject.prototype' (exmplo da aula 'Herança #01').

Para você acrescentar novos atributos a estes objetos filhos, precisa acrescentar o atributo no objeto pai! exemplo abaixo:    
*/

MeuObjeto.prototype.nome = 'Anônimo'  
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
// Bom dia! Meu nome é Anônimo

obj2.nome = 'Rafael'
obj2.falar()
// Bom dia! Meu nome é Rafael

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Mudei a fonte 'Object.prototype' para 'MeuObjeto.prototype' 
obj3.nome = 'Obj3'
obj3.falar()
// Bom dia! Meu nome é Obj3


// CUIDADO! se eu criar outro objeto sem usar 'new´ vai sobre escrever a fonte.
const objSemNew = MeuObjeto.prototype
objSemNew.nome = 'Igor'
obj1.falar()
// Bom dia! Meu nome é Igor

// Resumo da loucura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
// true
//Prova de que o objeto instanciado a partir da função são iguais 

console.log(MeuObjeto.__proto__ === Function.prototype) //'Function.poototype' ??? WTF 
// true
// A função(além de ter um protótipo) também tem um atributo '__proto__' aponta para 'Function.poototype'

console.log(Function.prototype.__proto__ === Object.prototype)
// true
// O protótipo do protótipo de uma function aponta para 'Object.prototype'

console.log(Object.prototype.__proto__ === null)
// true
// Objetc.prototype é o topo da cadeia é nulo MAS ELE EXISTE!...
console.log(Object.prototype.__proto__ === undefined)
// false
// Ele existe mas não aponta para nada (está no topo da cadeia)

// REVER AULA MUITO COMPLICADO!