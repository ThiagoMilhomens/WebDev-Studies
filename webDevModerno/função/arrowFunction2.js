//----------------------Funções Arrow #02---------------------//

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)  // repare que usando arrow function não necessita .bind(this)
} 

new Pessoa
/*
1
2
3
4
...
*/