// Estrturas de controle FOR/IN
// Apenas um exemplo usando array, mas, existem ferramentas melhores e específicas para se trabalhar em array...

const notas = [6.7, 7.4, 9.8]   // Array é uma estrutura indexada, começando de 0, 1, 2.... 

for (sequencia in notas) {   // FOR/IN vai entregar o índice (quantindade, posição ?) de cada elemento do array    
    console.log(sequencia)
} 
/*
0
1
2
*/

const notas = [6.7, 7.4, 9.8]

for (sequencia in notas) {      
    console.log(notas[sequencia])
}
/*
6.7
7.4
9.8
*/
const notas = [6.7, 7.4, 9.8]

for (let sequencia in notas) {              //lembrando que a boa prática pede uso do 'let'
    console.log(sequencia, notas[sequencia])
}
/*
0 6.7
1 7.4
2 9.8
*/

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]} `)
}
/*
nome = Ana 
sobrenome = Silva 
idade = 29 
peso = 64 
*/