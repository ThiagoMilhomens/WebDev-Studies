//---------------Herança #01---------------//
//Herança em JS está baseada em protótipos
//Todos os objetos criados em JS tem por padrão um pai chamado 'Oject.prototype' (que é uma função! que cria um "super" objeto )
/*Objetos seguem a cadeia de herança, se vc buscar por um atributo que não foi dado a um objeto,
JS vai sair do escopo deste objeto e vai procurar no objeto da hirearquia acima, assim sucessivamente 
até encontrar o atributo. Se não encontrar retornará 'undefined'      
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//tetes...

console.log(ferrari.__proto__) // '__proto__' é usado para encontrar o proptótipo do objeto 
// {}
console.log(ferrari.__proto__ === Object.prototype)
// true
console.log(volvo.__proto__ === Object.prototype)
// true
console.log(Object.prototype.__proto__)//prova que não existe hernaça acima de 'Oject.prototype'
// null


console.log(ferrari.prototype) //objeto não tem o atruibuto 'prototype', apenas função tem...
// undefined


function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
//function // function
console.log(Object.prototype, MeuObjeto.prototype) 
// {} // MeuObjeto {}