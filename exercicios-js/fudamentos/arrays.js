const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3] )
console.log(valores[4])

valores[4] = 10 //vai criar 2 elementos vazios 
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //funcao .push acrescenta elementos
console.log(valores)

console.log(valores.pop()) // funcao .pop retira o ultimo elemenento do array
delete valores[1]
console.log(valores)

console.log(typeof valores) // retorna object  array é objeto