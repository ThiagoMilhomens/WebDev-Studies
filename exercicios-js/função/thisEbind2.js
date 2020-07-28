//----------------------This e a função Bind 2---------------------//

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // '1000' define o tempo em milisegundos que a função 'setInterval' é disparada
}

new Pessoa 
/*
1
2
3
4
*/
// Atalho do run code (ctrl + alt + N) e para encerrar (ctrl + alt + M)  

//--------sem usar .bind------//

function Pessoa() {
    this.idade = 0
    
    const self = this  // outra forma de garantir que o valor do 'this' seja executado
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000) 
}

new Pessoa 
/*
1
2
3
4
*/