const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (indice in numeros) {
    if (indice == 5) break  // 'break' interrompe a repetição e sai do laço
    console.log(`${indice} = ${numeros[indice]}`)
}
/*
0 = 1
1 = 2
2 = 3
3 = 4
4 = 5
*/

const numeros = [1, 2, 3, 4, 5, 6,]

for (indice in numeros) {
    if (indice == 4) continue  // 'continue' interrompe a repetição atual e pula para a próxima
    console.log(`${indice} = ${numeros[indice]}`)
}
/*
0 = 1
1 = 2
2 = 3
3 = 4 // a próxima repetição (índice == 4) respeitando a sequência não vai acontecer, será pulada.
5 = 6
*/
