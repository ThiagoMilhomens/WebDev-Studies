//---------------Classe #01---------------//
// 'Class'é um conceito usado em linguagens OO raramente usado em JS
// Adicionado na versão ES6 só obrigatório o uso em algumas situações do framework React 
// Como tudo é função, a orientação a objetos em JS acaba sendo centrada em função...

// A classe será transformada em uma função construtora
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // parâmetros da "função construtora"
    this.nome = nome
    this.valor = valor
    }
}

class CicloFinanceiro {
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] 
    }
    // as funções abaixo a classe 'Ciclo Finaceiro' e são acionadas pelo ao array acima 
    // Tem formas melhores de tratar Array, em vez das funções abaixos, mas não foi ensinado ainda 
    addLancamentos(...lancamentos) {  
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

//definindo os parâmntros
const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario())
// 4280

