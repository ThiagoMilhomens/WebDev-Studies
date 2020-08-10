//-------------Map #01---------------//
//Função 'map' mapeia um array e retorna um OUTRO array com os elemntos transformados
//Tem 3 parâmetros (value, index e array)

const nums = [1, 2, 3, 4 , 5] 

// map é um 'for' com propósito
let resultado = nums.map(function(e) { //chamando somente o primeiro parâmetro 'e'
    return e * 2   // necessário 'return' para transformar o elemento em outra coisa 
})

console.log(resultado) // Retorna o array pertencente à variável 'resultado'
// [ 2, 4, 6, 8, 10 ]
console.log(nums) // A constante 'nums' continua inalterada
// [ 1, 2, 3, 4, 5 ]

//------------------------------------------------------------------//

// Criado funções e usando elas dentro de map's sucessivos

//usando arrow function
const soma10 = e => e + 10  // arrrow function já tem o 'return' implícito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //template string
//'parseFloat()' transforma numero inteiro em decimal (ponto flutuante)
//'toFixed(2)' determina a quantidade de casas decimais
//'replace('.',',')' neste caso passa para o formato brasileiro com vírgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Map's sucessivos 
//Estamos alterando CADA um dos elementos do array três vezes...

console.log(resultado)
// [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]