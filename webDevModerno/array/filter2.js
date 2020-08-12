//-------------Filter #02---------------//
// Simulando a função 'filter'


Array.prototype.filter2 = function(callback) {
    const newArray = []  
    for (let i = 0; i < this.length; i++) { 
        if (callback(this[i], i,this)) {
            newArray.push(this[i])      // Desisto! kkkkk
        }
    }
    return newArray
} 
 

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]



const prodCaro = produto => produto.preco >= 500
const prodFragil = produto => produto.fragil 

console.log(produtos.filter2(prodCaro).filter2(prodFragil))
