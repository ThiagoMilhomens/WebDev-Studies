//let dezena = getInteiroAleatorio(1, 61)

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 1

while (opcao != 60) {      
    opcao = getInteiroAleatorio(1, 61)    
    console.log(`Opção escolhida foi ${opcao}.`)    
}

console.log('Até a próxima!') 

/*
function teste(num) {
    if (num > 7)
    console .log(num)

    console.log ('final')
}

//teste(6)
teste(8)
*/