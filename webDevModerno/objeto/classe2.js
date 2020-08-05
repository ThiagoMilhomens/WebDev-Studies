//---------------Classe #02---------------//

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
} 
// 'extends' define que uma classe tem outra como protótipo criando hierar quia
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) //'super' instancia a função construtora da classe de hierarquia superior
    this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
// Filho { sobrenome: 'Silva', profissao: 'Professor' }