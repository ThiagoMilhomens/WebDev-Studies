 //-------------Foreach #01---------------//
 
 //'.forEach()' é uma das formas de percorrer o array
 //É uma função em loop que fechará o laço no último elemento do array
 //Assim eu posso determinar uma função callback(invoked), que será executada em cada um dos elementos do array 
 //A função callback tem 3 parâmetros(value, index e array)


const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/

//Chamando o terceiro parâmetro array, por ser loop ele vai retornar pelo quantidade do index  
aprovados.forEach(function(nome,indice,array){
    console.log(array)
})
/*
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
*/

//usando arrow function e chamando apenas o primeiro parâmetro do callback
aprovados.forEach(nome => console.log(nome))
/*
Agatha
Aldo
Daniel
Raquel
*/

// armazenando a função em uma variável
const exibirAprovados = nomesAprovados => console.log(nomesAprovados)
aprovados.forEach(exibirAprovados)
/*
Agatha
Aldo
Daniel
Raquel
*/
