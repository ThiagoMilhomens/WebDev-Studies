const gondola = []

for (let corredor = 0; corredor < 10; corredor++) {
    gondola.push(function () {
        console.log(corredor)
    })
}

gondola[2]()
gondola[8]()
//2
//8

// Usando var vai dar o problema do escopo global.....

const gondola = []

for (var corredor = 0; corredor < 10; corredor++) {
    gondola.push(function () {
        console.log(corredor)
    })
}

gondola[2]()
gondola[8]()
//10
//10