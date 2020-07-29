//----------------------Funções factory #03---------------------//

// Classe vs Função Factoy
// Classe é uma forma diferente de se construir função em JS

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
// Meu nome é João

// agora com função construtora...

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()
// Meu nome é Maria

/*Na vídeo aula Leonardo mostra uma vantagem no browser da função construtora,
porque ela não utilizar 'this'. Ao contrário da classe a função contrutora teria 
contexto léxico "fechado" ??? não retornado indefinido...*/
