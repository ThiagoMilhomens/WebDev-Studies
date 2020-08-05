//---------------JSON vs Objeto---------------//

//JSON - JavaScript Object Notation
//Permite a interoperabilidade de dados(textual) entre diferentes sistemas e linguagens

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj))
// {"a":1,"b":2,"c":3}
// A função 'JSON.stringify()' ´só extrai os dados e ignora a funçao 'soma'

// transformando JSON em objeto

console.log(JSON.parse ('{ a:1, b: 2, c:3 }') )
// SyntaxError: Unexpected token a in JSON at position 2

console.log(JSON.parse ('{ 'a':1, 'b': 2, 'c':3 }') )
// SyntaxError: Unexpected token ' in JSON at position 2



console.log(JSON.parse ('{ "a":1, "b": 2, "c":3 }') ) // atributos e string sempre entre "aspas duplas" 
// { a: 1, b: 2, c: 3 }

//Supurta objeto, array, bollean
console.log(JSON.parse ('{ "a": 1.7, "b": "Qualquer", "c": true, "d": {"quantidade": 12}, "e": ["oi", 1] }') )
/*
{
  a: 1.7,
  b: 'Qualquer',
  c: true,
  d: { quantidade: 12 },
  e: [ 'oi', 1 ]
}
*/