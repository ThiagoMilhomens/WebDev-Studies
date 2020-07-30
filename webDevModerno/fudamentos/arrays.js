const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3] )
console.log(valores[4])
//7.7 9.2
//undefined

valores[4] = 10 //vai criar 2 elementos vazios 
console.log(valores)
console.log(valores.length)
//[ 7.7, 8.9, 6.3, 9.2, 10 ]
//5

valores.push({id:3}, false, null, 'teste') //funcao .push acrescenta elementos
console.log(valores)
//[ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']
console.log(valores.pop()) // funcao .pop retira o ultimo elemenento do array
//'teste'
delete valores[1]
console.log(valores)
//[ 7.7, <1 empty item>, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores) 
//object