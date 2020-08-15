// gerando um dezena aleatória
const max = 2
const min = 1

function gerarDezena(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

// criando retorno para 6 dezenas aleatórias
const dezenas = [1, 2, 3, 4, 5 ,6]


let resultado = dezenas.map(function(e){
    return (gerarDezena(min, max))  
})

console.log(resultado)


