Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10) ) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida!')
    }
}

imprimirResultado(9.2)
imprimirResultado(8.2)
imprimirResultado(4.2)
imprimirResultado(3.2)
imprimirResultado(-3)
imprimirResultado(13)
imprimirResultado('13') // TypeError, esse codigo ñ aceita string. Seraia pq tem var Number?
/*
Quadro de Honra
Aprovado
Recuperação
Reprovado
Nota inválida!
Nota inválida!
TypeError: nota.entre is not a function
*/

//-------------------------//------------------------------//
/ Outra forma de fazer...


const imprimirResultado = function(nota) {
    if (nota >= 7 && nota <=10) {
        console.log('Aprovado')
    } else if (nota < 7 && nota >= 4) {      
        console.log ('Recuperação')
    }  else if (nota < 4 && nota >= 0) {      
        console.log ('Reprovado')
    } else if (nota < 0)  {    
        console.log ('Nota inválida')
    } else if (nota > 10)  {    
        console.log ('Nota inválida')
    } else {
        console.log('Nota inválida')
    }
}


imprimirResultado(8.2)
imprimirResultado(4.2)
imprimirResultado(3.2)
imprimirResultado(-3)
imprimirResultado(13)
imprimirResultado('treze')
/*
Aprovado
Recuperação
Reprovado
Nota inválida
Nota inválida
Nota inválida
*/
