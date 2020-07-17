for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) 
/*
0
1
2
3
4
5
6
7
8
9
i = 10
*/
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) // Ñ consegue buscar i pq i está dentro do escopo e foi atribuído como let
/* 
1
2
...
8
9
ReferenceError: i is not defined
*/
