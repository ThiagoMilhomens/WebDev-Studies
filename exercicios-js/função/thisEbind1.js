//----------------------This e a função Bind---------------------//

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // se não usar 'this' ele não retorna 'saudacao'
    }
}

pessoa.falar()
// Bom dia!

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
// undefined

const falar = pessoa.falar.bind(pessoa) // '.bind' ligou com a const 'pessoa' que contem 'saudacao'
falar()
// Bom dia!