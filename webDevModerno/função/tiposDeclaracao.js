//----------------------Tipos de Declaração---------------------//

console.log(soma(3, 4)) // Function declaration permite ser chamada antes da linha da função  
//7

// function declaration
function soma(x,y){
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(6, 2)) // Function expression só pode chamar depois
//4

//named function expression
const mult = function mult(x, y) { //pouco utilizada, vantagem de facilmente reconhecida no debug
    return x * y
}
console.log(mult(2, 5))
//10