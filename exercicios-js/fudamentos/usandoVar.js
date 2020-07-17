{
    {
        {
            {
                var carro = 'Palio'
            }
        }
    }
}
console.log(carro) 
//Palio

// A variavel dentro do bloco está visivel (global) pq ela não está dentro de uma função

function produto() {
    var moto = 'CB125'
   console.log(moto)
}
produto() // estou executando a função! ñ estou chamando a var...
//CB125

console.log(moto) // var moto deixa de ser global dentro da função
//ReferenceError: moto is not defined