//---------------Array: Métodos Importantes---------------//

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Apesar de 'pilotos' ser uma constante, o conteúdo do array pode ser modificado...

// '.pop()' remove SOMENTE o ÚLTIMO elemento, não adianta atribiuir parâmetro na função 
pilotos.pop()  
console.log(pilotos)
// [ 'Vettel', 'Alonso', 'Raikkonen' ]

//'.push()' acrescenta no final, se deixar () vazio cria um index undefined (não aparece no log por ser o último)  
pilotos.push('verstappen')
console.log(pilotos)
// [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

//'.shift()' remove o primeiro elemento
pilotos.shift()  
console.log(pilotos)
// [ 'Alonso', 'Raikkonen', 'verstappen' ]

//'.unshift()' adiciona como primeiro elemento
pilotos.unshift('Hamilton')  
console.log(pilotos)
// [ 'Hamilton', 'Alonso', 'Raikkonen', 'verstappen' ]

// '.splice()' adiciona, remove , adiciona e remove ao mesmo tempo com parâmetros entre ()

// adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa' ) 
console.log(pilotos)
// [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'verstappen' ]

// removendo
pilotos.splice(3, 1) 
console.log(pilotos)
// [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'verstappen' ]

// '.slice()' é um MÉTODO (pq precisa de nova constante), tira uma fatia do array e retorna um OUTRO ARRAY!
const algunsPilotos1 = pilotos.slice(2) // pega o index 2 e o restante 
console.log(algunsPilotos1)
// [ 'Bottas', 'Raikkonen', 'verstappen' ]


const algunsPilotos2 = pilotos.slice(1, 4) // pega do index 1 até o 3 (4 não entra!) 
console.log(algunsPilotos2)
// [ 'Alonso', 'Bottas', 'Raikkonen' ]
