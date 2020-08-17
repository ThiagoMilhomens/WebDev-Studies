// gerando um dezena aleatória
const max = 60
const min = 1

function gerarDezena(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

// criando retorno para dezenas aleatórias
const maxDezenas = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]


aleatorios = maxDezenas.map(function(e){
    return (gerarDezena(min, max))  
})

semRepeticao = aleatorios.filter((v, i, a) => a.indexOf(v) === i);

const seisDezenas = semRepeticao.slice(0, 6).sort((a,b) => a-b)
const seteDezenas = semRepeticao.slice(0, 7).sort((a,b) => a-b)
const oitoDezenas = semRepeticao.slice(0, 8).sort((a,b) => a-b)
const noveDezenas = semRepeticao.slice(0, 9).sort((a,b) => a-b)
const dezDezenas = semRepeticao.slice(0, 10).sort((a,b) => a-b)
const onzeDezenas = semRepeticao.slice(0, 11).sort((a,b) => a-b)
const dozeDezenas = semRepeticao.slice(0, 12).sort((a,b) => a-b)
const trezeDezenas = semRepeticao.slice(0, 13).sort((a,b) => a-b)
const quatorzeDezenas = semRepeticao.slice(0, 14).sort((a,b) => a-b)
const quinzeDezenas = semRepeticao.slice(0, 15).sort((a,b) => a-b)


console.log(seisDezenas)
console.log(seisDezenas)
//console.log(seteDezenas)
//console.log(oitoDezenas)
//console.log(noveDezenas)
//console.log(dezDezenas)
//console.log(onzeDezenas)
//console.log(dozeDezenas)
//console.log(trezeDezenas) 
//console.log(quatorzeDezenas)
//console.log(quinzeDezenas)