// gerando um dezena aleatória
const max = 60
const min = 1

function gerarDezena(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

// criando retorno para dezenas aleatórias
const dezenas = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


resultado = dezenas.map(function(e){
    return (gerarDezena(min, max))  
})


// definindo constantes de acordo com a quantidade de dezednas desejadas
const seisDezenas = resultado.slice(0, 6).sort((a,b) => a-b)
const seteDezenas = resultado.slice(0, 7).sort((a,b) => a-b)
const oitoDezenas = resultado.slice(0, 8).sort((a,b) => a-b)
const noveDezenas = resultado.slice(0, 9).sort((a,b) => a-b)
const dezDezenas = resultado.slice(0, 10).sort((a,b) => a-b)
const onzeDezenas = resultado.slice(0, 11).sort((a,b) => a-b)
const dozeDezenas = resultado.slice(0, 12).sort((a,b) => a-b)
const trezeDezenas = resultado.slice(0, 13).sort((a,b) => a-b)
const quatorzeDezenas = resultado.slice(0, 14).sort((a,b) => a-b)
const quinzeDezenas = resultado.sort((a,b) => a-b)


// colocando em ordem numérica
//console.log(seisDezenas)
//console.log(seteDezenas)
//console.log(oitoDezenas)
//console.log(noveDezenas)
//console.log(dezDezenas)
//console.log(onzeDezenas)
//console.log(dozeDezenas)
//console.log(trezeDezenas)
//console.log(quatorzeDezenas)
console.log(quinzeDezenas)


