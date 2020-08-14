//-------------FlatMap---------------//
//O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array.
//Tem 4 parâmetros, função callback (valorAtual, indice, array) e thisArg

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]  
   }, {
      nome: 'Turma M2',
      alunos: [{
          nome: 'Rebeca',
          nota: 8.9
      }, {
          nome: 'Roberto',
          nota: 7.3
      }]
}]  
// Acima a const 'escola' é um array de objetos(Turmas), cujos contém outro array dentro(alunos). 
// Queremos extrair as notas de todos os alunos das 2 turmas diferentes, e um único array.

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
  
//usando apenas 'map'
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
// [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]
// o resultado é um array com mais 2 arrays dentro, mas queremos todas as nota em um único array...

//se concatenarmos temos o resultado esperado
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))
// [ 8.1, 9.3, 8.9, 7.3 ]

// 'flatMap' já entrega a situação acima pornta.

// simulação da função 'flatMap'
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

// flatMap na prática
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
// [ 8.1, 9.3, 8.9, 7.3 ]