//----------------------Funções factory #0 1---------------------//

// Factoring é uma função que retorna (fabrica) um novo objeto
//Factoring simples
function criarPessoa () {
    return {         // repare que se usa o return para gerar os parâmetros
    nome: 'Ana',
    sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
// { nome: 'Ana', sobrenome: 'Silva' }

//----------------------Funções factory #02---------------------//

function criarProduto(nome, preco) {  // Repare que já estou incluindo parâmentros entre ()
    return {
        nome, // como já sinalizei o parâmetro entre (), não precisa de ':'
        preco,
        desconto: 0.1 // aqui se torna um desconto padrão de 10%
    }
}

console.log(criarProduto('Tijuca Longneck', 4.99))
console.log(criarProduto('Queijo Coalho', 20.00))
//{ nome: 'Tijuca Longneck', preco: 4.99, desconto: 0.1 }
//{ nome: 'Queijo Coalho', preco: 20, desconto: 0.1 }



