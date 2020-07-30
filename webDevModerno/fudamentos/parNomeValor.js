// par nome/valor

const saudacao = 'Opa' // Contexto léxio 1

function exec() {
    const saudacao = 'Fala!' // Contexto léxio 1
    return saudacao
}

console.log(saudacao, exec())
//Opa Fala!

//Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Dom Romualdo',
        numero: 123
    }
}
console.log(Cliente)
/*
{
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  'endereço': { logradouro: 'Rua Dom Romualdo', numero: 123 }
}
*/