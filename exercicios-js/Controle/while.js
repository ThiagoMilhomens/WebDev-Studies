// Estrutura de controle While

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 // só nao pode usar o número que se procura, -1 neste caso.

while (opcao != -1) {      // enquanto for diferente de -1 ele continua no loop...
    opcao = getInteiroAleatorio(-1, 10)    // foi delimitado a procura entre -1 e 10. 
    console.log(`Opção escolhida foi ${opcao}.`)    
}

console.log('Até a próxima!') // vai ficar procurando até achar -1, pode ser de primeira ou demorar várias vezes...
/*
Opção escolhida foi 2.
Opção escolhida foi 0.
Opção escolhida foi 5.
Opção escolhida foi 1.
Opção escolhida foi 4.
Opção escolhida foi 5.
Opção escolhida foi 9.
Opção escolhida foi 6.
Opção escolhida foi 5.
Opção escolhida foi 8.
Opção escolhida foi 0.
Opção escolhida foi 4.
Opção escolhida foi 7.
Opção escolhida foi 1.
Opção escolhida foi 0.
Opção escolhida foi 2.
Opção escolhida foi 0.
Opção escolhida foi 9.
Opção escolhida foi 5.
Opção escolhida foi 1.
Opção escolhida foi 0.
Opção escolhida foi 7.
Opção escolhida foi 8.
Opção escolhida foi 4.
Opção escolhida foi 5.
Opção escolhida foi -1.
Até a próxima!
*/

             