// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)         //obs console.log já está dentro da função 
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7 ,8)
imprimirSoma()
//5
//NaN
//5
//NaN

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
//5
//3
//NaN
