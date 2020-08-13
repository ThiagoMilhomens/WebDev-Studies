//-------------Imperativo vs Declarativo---------------//
//Imperativo e declarativo são diferentes abordagens para se escrever códigos
const aluno = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for ( let i =0; i < aluno.length; i++) {
    total1 += aluno[i].nota
}
console.log(total1 / aluno.length)
// 8.55

//Declarativo
//É preferível pq vc usa funções próprias da linguagens
//Permite o reuso do código e deixa mais legível

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = aluno.map(getNota).reduce(soma)
console.log(total2 / aluno.length)
// 8.55