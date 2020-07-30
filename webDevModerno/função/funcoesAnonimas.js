//----------------------Funções Anônimas---------------------//

const soma = function(x, y) {
    return x + y
}

const subtrai = function(x, y) {
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma || subtrai ) {
    console.log(operacao(a, b))
}
 
imprimirResultado(3, 4, subtrai)
// -1

imprimirResultado(3, 4) // repare que ele assumiu o primeiro atributo, 'soma'.
// 7 

imprimirResultado(3, 4, function (x, y) {
    return x / y
})
// 0.75


imprimirResultado(3, 4, (x, y) => x * y) // Função arrow sempre será anônima...
// 12


// Funcão anônima dentro de um objeto
const pessoa = {
    falar: function () {   // ES2015 permite essa linha com esta sintaxe 'falar() {' 
        console.log('Opa!')
    }
}

pessoa.falar()
// Opa!