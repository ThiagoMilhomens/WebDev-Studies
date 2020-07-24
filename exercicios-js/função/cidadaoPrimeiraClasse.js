//----------Cidadão de Primeira Linha--------------//

// Função dem JS é Frist-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2,3))
// 5

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())
// Opa!

// Passsar função como parâmetro para outra função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})
// Executando...

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
} 

soma(2, 3)(4)
// 9
const cincoMais = soma(2, 3)
cincoMais(4)
//9



