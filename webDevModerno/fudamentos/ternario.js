// Operador ternário

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/*
Este é o operador ternário " nota => nota >= 7 ? 'Aprovado' : 'Reprovado' " e
ele encontra-se dentro de uma função arrow by the way...;
O primeiro operando é a expressão relacional " nota >=7 " e retorna um boolean;
Se for verdadeiro (true) retona " 'Aprovado' ";
Se for falso (false) retorna " 'Reprovado' ".
*/

console.log(resultado(7.1))
// Aprovado
console.log(resultado(6.4))
// Reprovado
