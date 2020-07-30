function valores(a, b) {
    return{
       soma: a + b,
       sub: a - b,
       mult: a * b,
       div: a / b

    }
}

console.log(valores(3, 2))
//{ soma: 5, sub: 1, mult: 6, div: 1.5 }

//resposta
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
