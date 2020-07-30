function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {      
    opcao = getInteiroAleatorio(-1, 10)    
    console.log(`Opção escolhida foi ${opcao}.`)    
} while (opcao != -1)

console.log('Até a próxima!')

// Diferente do emplo passado, basicamente a expressão está depois do bloco, e foi acrescentado 'do' antes...
// Isso torna possível atribuir o mesmo valor tanto na variável 'opcao = -1', como na expressão  'while (opcao != -1)'
// Essa estrutura ramente é utilizada o mais comum é usando apenas 'while' 