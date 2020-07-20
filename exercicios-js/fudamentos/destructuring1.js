 // operador destructuring é um recurso ES2015
 // Uma forma de extrair da estrurtura do objeto ou do array o atributo ou elemento desejado 

 const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
         logradouro: 'Rua ABC',
         numero: 1000
     }

 }

 const{nome, idade} = pessoa // Devido pessoa se tratar de objeto usaremos {}
 console.log(nome, idade)
 //Ana 5

 const{nome: n, idade:i} = pessoa
 console.log(n, i)
 //Ana 5

 const { sobrenome, bemHumorada = true} = pessoa
 console.log(sobrenome, bemHumorada)
 //undefined true

 const { endereco: {logradouro, numero, cep } } = pessoa // colocar também entre {} os atributos aninhados
 console.log(logradouro, numero, cep )
//Rua ABC 1000 undefined