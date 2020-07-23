// Estrutura de controle FOR

//primeiro vamos analisar a estrutura de controle 'while' abaixo:

let contador = 1                      // 'declaração' de uma variável
while(contador <= 5) {                // 'expressão' que determina se continua ou não no laço
    console.log(`contador = ${contador}`)
    contador++                        // 'incremento' determina a saída do laço no 5 (sem isso temos loop infinito! retornando 1)
}
/*
contador = 1
contador = 2
contador = 3
contador = 4
contador = 5
*/

// A estrutura 'for' tem os mesmos elementos acima (declarção, expressão, incremento)...

for (let i = 1; i <=5; i++) {     // os elementos estão separados por ';'
    console.log(`i = ${i}`)
}
/*
i = 1
i = 2
i = 3
i = 4
i = 5
*/
//Obs: Atribuir 'i' com 'let, é uma boa prática para evitar reconhecimento no escopo global. 


// Array...

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
/*
nota = 6.7
nota = 7.4
nota = 9.8
nota = 8.1
nota = 7.7
*/