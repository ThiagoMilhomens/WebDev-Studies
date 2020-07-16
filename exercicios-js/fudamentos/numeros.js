const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2) // repara que o retorno será sem .flutuante
console.log(Number.isInteger(peso1))//função .isInteger verifica se é número inteiro
console.log(Number.isInteger(peso2))
//1 2
//true
//true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2))// .toString transforma em string acrescentando 2 entre() apresenta em binário 
console.log(typeof media) // Retorna number com n minusculo
console.log(typeof Number)// Number com N maiúsclo relacionado a função do bloco superior
//7.87
//111.11011110111110011101101100100010110100001110010101
//number
//function