const nome = 'Thiago'
const concatenacao = 'Olá ' + nome + '!'
const template = `
  Olá 
  ${nome}!` // usar `` permite quebrar texto

console.log(concatenacao, template)
/*Olá Thiago! 
   Olá 
   Thiago!*/

// expressoes...

console.log(`1 + 1 = ${2+2}`)
//1 + 1 = 4

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('se liga')}!`)
//Ei... SE LIGA!