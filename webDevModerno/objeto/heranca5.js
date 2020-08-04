//---------------Herança #05---------------//

//Tudo é Função, então tudo tem '.prototype'

console.log(typeof String)
//function
console.log(typeof Array)
//function
console.log(typeof Object)
//function

// adcionando função dentro do protótipo

String.prototype.inverter = function () { //'.inverter' seria como um "novo atributo" mas é esta função...
    return this.split('').reverse().join('') //split().reverse().join() são funções predefinidas de JS 
}
// '.split('')' gera array separando todas as letras 
// '.reverse()'  reverte a posição e ''.join('')' junta tudo denovo sem array

console.log('Escola Cod3r'.inverter())
// r3doC alocsE
//Não foi criado um objeto com o atributo 'Escola cod3r', portanto, ele foi gerado automaticamente dentre da função string ao colocá-lo ente ''.
//A função '.reserve()' nao está na API do sistema, mas, como foi adicionado no prototype da função 'String`' e 'Escola cod3r' é um objeto desta função, '.reserve()' será acionado via console.log


Array.prototype.segundo = function() {
    return this [1]        // repara que depois de 'this' não tem '.' (.algumacoisa) 
}                          // [1] é o índex...
 
console.log([1,2,3,4,5].segundo())
// 2

//letras dentro do array sempre entre '' (do contrario seria uma variável)
console.log(['a','b','c','d','e'].segundo()) 
// b

// NÃO RECOMENDÁVEL / ABOMINÁVEL! embora possível de se fazer...

//'.tostring' é função já predefinida em JS, estamos e estamos alterndo o comportamento  
// Criar um nova função é OK, mas nunca altere uma função pre definida da linguagem...
String.prototype.toString = function () { 
    return 'Lascou tudo!'
}

console.log('Escola Cod3r'.inverter())
// !odut uocsaL