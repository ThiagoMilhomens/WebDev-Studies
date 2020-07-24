//------------Parâmetros e Retorno são opcionais---------------//

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
} 

console.log(area(2, 2))
console.log(area(2)) //retorna NaN pq o segundo valor é undefined
console.log(area())
console.log(area(2, 3, 17, 22, 44)) // vai considerar só as duas primeiras
console.log(area(5, 5))
//4
//NaN
//NaN
//6
//Valor acima do permitido: 25m2.
//undefined

//Obs: os parâmetros vc pode passar quantos quiser e nâo dará erro, devido a flexibilidade do JS.  