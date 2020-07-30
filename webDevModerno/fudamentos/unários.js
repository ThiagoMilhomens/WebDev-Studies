  // Operadores unários

  let num1 = 1
  let num2 = 2

  num1++
  console.log(num1)
  //2
  --num1 // repare que o operador -- esta prescedindo a variavel let  
  console.log(num1)
  //1

console.log(++num1 === num2-- ) // deixando o operador -- após a variável ñ será decrementado 
//true
console.log(num1 === num2 ) // mas pedindo retorno novamente, agora será decrementado!
//false
