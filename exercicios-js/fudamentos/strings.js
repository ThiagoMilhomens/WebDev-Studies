const escola = "Cod3r"

console.log(escola.charAt(4)) 
console.log(escola.charAt(5)) // Retorna merda nemhuma por estar alem da quantidade de caracteres
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("d"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
 
console.log("Essa função vai acrescentar, ".concat(escola).concat (": que é a constante!"))// ultima 
console.log(escola.replace('o', 'e')) // Nescessario o caracter esta entre '' 

console.log('Ana # Maria # Pedro'.split('#') )