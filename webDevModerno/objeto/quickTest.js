var pessoa = {nome: 'maria'}
pessoa.nome = 'pedro'

console.log(pessoa)

pessoa = {nome: 'joao'}
console.log(pessoa)

pessoa.end = 'rua tal'
console.log(pessoa)

delete pessoa.nome
console.log(pessoa) 