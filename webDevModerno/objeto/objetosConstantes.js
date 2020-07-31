//--------------Objetos Constantes-------------//
//exemplificando o conceito de "apontamento de memória"


//a constante 'pessoa' tem endereço de memória '123' aonde está alocado o 'object'
// pessoa -> 123 -> {...}  
const pessoa = { nome: 'João'}
//Abaixo vou modificar apenas o dados na memória do objeto
pessoa.nome = 'Pedro' // mas a constante continua sendo 'pessoa' apontando para endereço de memória '123'...
console.log(pessoa)
//{ nome: 'Pedro' }

//Abaixo vou tentar fazer uma outra atribuição para a constante
//pessoa  -> 456 -> {...}
pessoa = { nome: 'Ana'} // Erro, pq ñ dá para atribuir à constante, outro objeto em outro endereço de memória. 
console.log(pessoa)  //se 'pessoa' fosse uma 'var' funcionaria
//TypeError: Assignment to constant variable.

//Object.freeze vai proteger o 'object' de qualquer mudança ou tentativa de deletá-lo
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa) // Não dá erro, apenas ignora a tentativa de mudança 
//{ nome: 'Pedro' }

pessoa.end = 'Rua ABC' // ñ vai acrescentar outro atributo
delete pessoa.nome     // ñ vai deletar

console.log(pessoa)
//{ nome: 'Pedro' }