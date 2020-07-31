//--------------Estratégias de Criação de Objeto-------------//

// Usando a notação literal

const obj1 = {}
console.log(obj1)
// {}

// Usando operador 'new' e 'Object'

console.log(typeof Object, typeof new Object)// repare a diferença entre os dois
// function object
const obj2 = new Object // 'new Object' é função construtora
console.log(obj2)
// {}

// Funções  construtoras

function Produto(nome, preco, desc) {    // estando entre () as variáveis estão encapsuladas
    this.nome = nome                     // tornando a variável 'nome' pública usando 'this'
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15 )
const p2 = new Produto('Caderno', 16.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
// 6.7915 12.7425

// Função Factory

function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('João', 2560, 4)
const f2 = criarFuncionario ('Maria', 2560, 1)
console.log(f1.getSalario(), f2.getSalario() ) 
// 2218.6666666666665 2474.6666666666665

// Object.create

const filha = Object.create(null) // na aula retorna apenas { nome: 'Ana' } ???
filha.nome = 'Ana'
console.log(filha)
// [Object: null prototype] { nome: 'Ana' } 

// Uma função famosa que retorna Objeto... 'JSON.parse'

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) 
// Sou um JSON
