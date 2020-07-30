//----------Parâmetros Variáveis--------------//

function soma () {
    let soma = 0
    for (i in arguments) { //'arguments' é um array interno disponível em toda função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
//0
//1
//6.6

// os exemplos abaixo mostra a 'flexibilidade' do JS não dando erro..
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))
//3.3000000000000003Teste
//0abc

