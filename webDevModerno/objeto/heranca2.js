/*/---------------Herança #02---------------//
//Cadeia de protótipos (prototype chain)

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'} //shadowing 'attr3'

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
// undefined A B C

Object.prototype.attr0 = 0 //prática não é recomendável!
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
// 0 A B C
*/

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status()  {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing, quando definir 'ferrari' tendo como prototipo 'carro'
}

const volvo = {
    modelo: 'V40',
    status() { // shadowing da função usando 'super'
        return `${this.modelo}: ${super.status()}`
    }
}

//abaixo usando '.setPrototype' estabeleço que 'ferrari' tem 'carro' como protótipo
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
// { modelo: 'F40', velMax: 324 }
console.log(volvo)
// { modelo: 'V40', status: [Function: status] }

volvo.aceleraMais(100)
console.log(volvo.status())
// V40: 100km/h de 200km/h

ferrari.aceleraMais(300)
console.log(ferrari.status())
//300km/h de 324km/h