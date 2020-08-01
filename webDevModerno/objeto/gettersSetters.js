//--------------Getters/Setters-------------//
//Método 'get' serve para ler o valor de uma variável
//Método 'set' serve para alterar. São funções que acessam os valores dentro da variável

const sequencia = {
    _valor: 1,      // conveção usar underline antes do atributo (sinaliza para outro dev "privado"!)
    get valor() { return this._valor++ },
    set valor(valor) {  //Exceção do JS aceitando sobrecarga de métodos para o mesmo parâmetro
        if (valor > this._valor) { //'set'possibilita proteger (validar) a aplicação (só acrescenta ñ decresce) 
            this._valor = valor
        } 
    }
}  
//observe que não irei chamar no console o atributo '_valor'
console.log(sequencia.valor, sequencia.valor, sequencia.valor) //JS reconhece o método 'get' como atributo!
// 1 2 3
sequencia.valor = 1000 //inclusive para alterar '_valor' uso '.valor'!
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
// 1000 1001 1002
sequencia.valor = 900 // Ignora pq tenta setar valor abaixo do atribuido anteriormente
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
// 1003 1004 1005

// MAS... se eu chama com underline '_valor'
sequencia._valor = 900  
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
//900 901 902
//por isso convencionou-se que o atributo com _underline nao deve ser invocado para evitar BUG!   