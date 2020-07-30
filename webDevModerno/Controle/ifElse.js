const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {                               // repare q ñ precisa mais de sentença relacional...  (nota < 7) é desnecessário!
        console.log ('Reprovado')
    }
}

imprimirResultado(6.5)
//Reprovado
imprimirResultado(8.2)
//Aprovado
imprimirResultado('Nota 8') // cuidado com string (js é fracamente tipada), somente '8' passsaria...   
//Reprovado