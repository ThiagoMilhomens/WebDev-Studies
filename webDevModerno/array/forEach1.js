 //-------------Foreach #01---------------//
 
 //'.forEach()' é uma das formas de percorrer o array
 //Assim eu posso determinar uma função callback(invoked), que será executada em cada um dos elementos do array 
 //A função callback tem 3 parâmetros(value, index e array)


const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`) // 
})
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/

//usando arrow function e chamando apenas o primeiro parâmentro do callback
aprovados.forEach(nome => console.log(nome))
/*
Agatha
Aldo
Daniel
Raquel
*/
