//--------------Notação Literal-------------//
// Melhorias (mudanças) na sintaxe ES6

const a = 1
const b = 2 
const c = 3

//Criando objeto, com atributos que tem mesmo nome e assumem os valores das constantes acima  
// Antes era necessário essa duplicidade a:
const obj1 = { a: a, b: b, c: c}
//ES6  é automátio
const obj2 = {a, b, c} //Obviamente se quiser outro nome para o atributo aí usa ':', ex 'segundoColocado: b'
console.log(obj1, obj2)
// { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

//-----------------------------------------------------------------//

//Usando o nome da variável para formar o objeto
const nomeAttr = 'nota'
const valorAttr = 7.87

//Antes...
const obj3 = {}
obj3[nomeAttr] = valorAttr // o nome do atributo precisa estar entre []
console.log(obj3)
//{ nota: 7.87 }

//ES6...
const obj4 = {[nomeAttr]: valorAttr} // repare na necessaidade do ':'
console.log(obj4)
//{ nota: 7.87 }

//------------------------------------------------------------------//

// Definindo funções dentro do objeto

const obj5 = {
    funcao1: function() {  // Antes...
        //....
    },
    funcao2 () {           // ES6, ñ precisa ': function'...
        //....
    }
}

console.log(obj5)
// { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }

