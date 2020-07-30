var carro = 'Palio'
{
    var carro = 'Gol' 
    console.log('dentro =', carro)
}

console.log('fora =', carro)
//dentro = Gol
//fora = Gol


//-------------------------//--------------------//

var moto = 'CB125'
function dentro() {
   var moto = 'BIS'
    console.log('dentro =', moto)
}

console.log('fora =', moto)
//fora = CB125
dentro()
//dentro = BIS