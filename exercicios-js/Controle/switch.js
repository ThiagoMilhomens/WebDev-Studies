// Estrutura de controle Switch

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra') // pode ser usado mais de um console.log
            break                          // break é mandatório para fechar esta regra e passar para a outra 
        case 8: case 7:                          
            console.log('Aprovado')
            break  
        case 6: case 5: case 4:            // não é possível separar por vírgulas ou usar intervalos
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:                          // default funcionaria mesmo estando acima...
            console.log('Nota Inválida')           
    }
} 

imprimirResultado(9.3)
imprimirResultado(7.8)
imprimirResultado(4.5)
imprimirResultado(2.9)
imprimirResultado(11)
/*
Quadro de Honra
Aprovado
Recuperação
Reprovado
Nota Inválida
*/