// Criando objeto de forma DINAMICA

const produto1 = {}  // O uso de {} representa OBJETO! se usar [] seria array nao tem ligacao com json q tbm usa {} 
produto1.nome = 'JBL GO'
produto1.preco = 199.99
produto1['Desconto Legal'] = 0.40 // evitar atributos com espaço
 
console.log(produto1) 
//{ nome: 'JBL GO', preco: 199.99 }

// Criando objeto com anotação literal de Objetos 

const produto2 = {
    nome: 'Camisa Polo',
    cor: 'azul',
    preco: 59.90,
}
 
console.log(produto2)
//{ nome: 'Camisa Polo', cor: 'azul', preco: 59.9 }
