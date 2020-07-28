//----------------------Funções Arrow #03---------------------//

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
// true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora não aponta mais para o escopo global...

comparaComThis(global) 
//false
comparaComThis(obj)
//true

// comportamento com arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //Ao contrario do primeiro exemplo (função tradicional) retorna 'false'
//false
// Pq o 'this' de uma função arrow está associado ao contexto no qual a função foi escrita.
comparaComThisArrow(module.exports) // ???
//true

// Usando .bind 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//false
comparaComThisArrow(module.exports)
//true


// Mesmo forçando um mudança de contexto com .bind isso não vai acontecer