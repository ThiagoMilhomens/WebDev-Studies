//---------------Herança #03---------------//

const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
// preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } //repare 'writable: false'
})

console.log(filha2.nome)
// Bia
filha2.nome = 'Carla' //Não vai mudar o nome pq foi definido 'writable: false'
console.log([`${filha2.nome} tem cabelo ${filha2.corCabelo}`]) 
//Bia tem cabelo preto

//Object.keys retorna os atributos enumeráveis pertencentes ao objeto
console.log(Object.keys(filha1)) 
console.log(Object.keys(filha2))
//[ 'nome' ]
//[ 'nome' ]


//usando for/in...
for(let chave in filha2) {
    filha2.hasOwnProperty(chave) ?
    console.log(chave): console.log(`Por herança: ${chave}`) //Não compreendo!!!
}
/* 
nome
Por herança: corCabelo
*/
