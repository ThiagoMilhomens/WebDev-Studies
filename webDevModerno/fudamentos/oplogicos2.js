/* Operadores lógicos exemplo
O código abaixo determina que as compras dependem de dois trabalhos para se ter o dinheiro necessário.
Se fechar somente um trabalho, pode comprar TV32 e tomar sorvete;
se fechar os dois trabalhos, pode comprar TV50 e tomar sorvete;
se não fechar nenhum trabalho, não compra TV e nâo toma sorvete, ou seja manter saudável.
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true,true))
/*
{
  comprarSorvete: true,
  comprarTv50: true,
  comprarTv32: false,
  manterSaudavel: false
}
*/

console.log(compras(true,false))
/*
{
  comprarSorvete: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
*/
console.log(compras(false,true))
/*
{
  comprarSorvete: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
*/
console.log(compras(false,false))
/*
{
    comprarSorvete: false,
    comprarTv50: false,
    comprarTv32: false,
    manterSaudavel: true
}
*/
