let isAtivo = false
console.log(isAtivo)
//false

isAtivo = true
console.log(isAtivo)
//true

isAtivo = 1
console.log(!!isAtivo) // ! significa negacao !! negando duplamente entao vira true
//true

//console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // [] usado em array
console.log(!!{})// {} usado em objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//console.log('pra finalizar...')

console.log(!!('' || null || 0 || ' ')) // || significa ou
//true


let nome = ''
console.log(nome || 'Desconhecido')
//Desconhecido*/