//----------------------IIFE---------------------//
// Immediately Invoked Function Expression
//Serve para fugir do escopo global

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// Será executado na hora!
// Foge do escopo mais abrangente!
