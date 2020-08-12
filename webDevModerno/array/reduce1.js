//-------------Reduce #01---------------//
//A função 'reduce' executa uma função de callback em cada elemento do array, além disso, possui um acumulador que pode ser incrementado a cada execução da função.
//Tem 5 parâmetros, função callback (valorAnterior, valorAtual, indice, array) e valorInicial

const foguetes = [
    { país: 'Russia', lancamentos: 32 },
    { país: 'US', lancamentos: 23 },
    { país: 'China', lancamentos: 16 },
    { país: 'Europa', lancamentos: 7 },
    { país: 'India', lancamentos: 4 },
 ]

const totalLancamentos = foguetes.reduce((valorAnterior, elemento) => valorAnterior + elemento.lancamentos, 0)
console.log(totalLancamentos)
// 82

//sem arrow function
const totalLancamentos = foguetes.reduce( function (valorAnterior, elemento) {
    return valorAnterior + elemento.lancamentos  // função callback
}, 0)                                            // '0' é o valor inicial
console.log(totalLancamentos)
// 82


//--------------------------------------------------------------------------------------------//
// Usando Map e Reduce

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
 ]

 console.log(alunos.map(a=>a.nota))
 // [ 7.3, 9.2, 9.8, 8.7 ]

 const resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
 }, 0)

 console.log(resultado)
 /*
 0 7.3
7.3 9.2
16.5 9.8
26.3 8.7
35
*/