function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('aprovado com nota ' + nota )
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)// ñ vai ter retorno
// aprovado com nota 8.1

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('') // string sem espaço!
seForVerdadeEuFalo(0)
// todos acima não terão retorno 


seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ') // string com espaço!
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
/*
É verdade...-1
É verdade... 
É verdade...?
É verdade...
É verdade...1,2
É verdade...[object Object]
*/
