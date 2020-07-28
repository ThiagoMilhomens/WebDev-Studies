//----------------------Funções Callback #01---------------------//

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir( nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir) // '.forEach' chama para cada elemento do array a função imprimir
/*
1. Mercedes
2. Audi
3. BMW
*/

// O callback é vc passar uma função e a mesma será chamda quando um evento acontecer
// O evento neste caso é cada um dos elementos percorridos no array