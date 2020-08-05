//---------------Herança #06---------------//


// Abaixo uma função construtora
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
//Na função construtora o operador 'new' cria um objeto cujo o protótipo aponta para a função

console.log(aula1, aula2)
// Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }

//Simulando o operador 'new'
function novo(f, ...params) {     // (...) é um operador chamado spread/rest
    const obj = {}                // criei um objeto novo 'obj'
    obj.__proto__ = f.prototype   // associarei o atributo prototype do 'obj' ao da função construtora lá de cima
    f.apply(obj, params)          //.apply executa função f( "new" obj mais os parâmetros ) 
    return obj                    //retorna o objeto criado ligando 'f' à 'Aula' 
}


// Operador spread (...) vai concactenar em array os parâmetros 'nome' e 'videoID' da função 'Aula'
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)
// Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
