//--------------Revisão sobre Objeto-------------//
//Objeto é uma coleção dinâmica (pode adicionar e remover) de pares chave/valor 

const carro = new Object //O operador'new' istancia um objeto através da função 'Object'
// Forma simples de criar objeto é por notação literal: const carro  = {}

//adicionando atributos
carro.nome = 'Palio'    //usando notação ponto
carro['Marca'] = 'Fiat' //usando colchetes...
carro.preco = 22000     

console.log(carro)
//{ nome: 'Palio', Marca: 'Fiat', preco: 22000 }

//removendo atributos
delete carro.preco
delete carro['Marca']
console.log(carro) 
//{ nome: 'Palio' }

//Exemplo de abstração utilizada em suposta corretora de seguros..

const moto = {
    modelo: 'CG 125',
    valor: 5000,
    proprietario: {
        nome: 'Raul',
        sobrenome: 'Silva',
        endereco: {
            logradouro: 'Rua Presidente Vargas',
            numero: 123 
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 23
    },{
        nome: 'Ana',
        idade: 25
    }],
    calcularValorSeguro: function() { // funçâo dentro do objeto
        // ....
    }
}

/*
calcularValorSeguro: function() {
        // ....
    }
*/

moto.proprietario.endereco.numero = 1000
moto['proprietario'] ['endereco']['logradouro'] = 'Av Barão de Mauá'
console.log(moto)
/*
{
  modelo: 'CG 125',
  valor: 5000,
  proprietario: {
    nome: 'Raul',
    sobrenome: 'Silva',
    endereco: { logradouro: 'Av Barão de Mauá', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 23 }, { nome: 'Ana', idade: 25 } ],
  calcularValorSeguro: [Function: calcularValorSeguro]
}
*/

delete moto.condutores
delete moto.proprietario.endereco
delete moto.calcularValorSeguro 

console.log(moto)
/*
{
  modelo: 'CG 125',
  valor: 5000,
  proprietario: { nome: 'Raul', sobrenome: 'Silva' }
}
*/
console.log(carro.condutores) //lá em cima eu deletei 'condutores´
//undfined
console.log(carro.condutores.length) //se não tivesse deletado condutores retornaria '2'
//TypeError: Cannot read property 'length' of undefined