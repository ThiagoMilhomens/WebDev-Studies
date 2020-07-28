//----------------------Funções Arrow #01---------------------//

// forma tradicional
let dobro = function (a) {
    return 2 * a
}

console.log(dobro(3))
// 6

// usando =>
dobro = (a) => { // basicamente 'funciton' foi substituído por '=>' (em posições invertidas)
    return 2 * a
}

console.log(dobro(5))
// 10

// reduzindo o código
dobro = a => 2 * a // retorno implícito, sem necessidade de usar {} e 'return'
console.log(dobro(Math.PI))
// 6.283185307179586

//com array tradicional
let saudacao = function () {
    return 'Olá'
}
console.log(saudacao())
// Olá


//com array usando arrow
saudacao = () => 'Olá'
saudacao = _ => 'Olá' // Js reconhece '_ 'como parâmetro também

console.log(saudacao())
// Olá
