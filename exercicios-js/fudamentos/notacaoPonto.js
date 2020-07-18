//Notação Ponto (.ceil .qualquercoisa ...)

console.log(Math.ceil(6.1)) // .ceil arredonda para cima .floor para baixo
//7

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1) // Ñ estou usando notação ponto no console... 
//{ nome: 'Bola' }

//----------------------------------//----------------------------------//

function Obj(nome) { // Essa função vai tornar nome 'público' 
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)// usando notação ponto no console
console.log(obj3.nome)
//Cadeira
//Mesa