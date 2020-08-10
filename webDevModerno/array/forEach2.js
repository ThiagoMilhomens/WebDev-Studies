//-------------Foreach #02---------------//
// Simulando a função '.forEach'

//Criando uma função callback chamada '.forEach2' no prototype de array 
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) { // laço percorrendo os índices
        callback(this[i], i, this) //chamando a função dentro do for com 3 params(valor, indice, array completo)
    }
}
const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/