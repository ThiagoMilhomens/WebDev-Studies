function teste1(num) {
    if(num > 7)
         console.log(num)     //repare que está sem {} após sentença if 
         console.log('final')
}

teste1(6) //sem {} ele ainda retorna o ultimo console.log como explicado na obs
//final

teste1(8)
//8
//final

//Obs: o uso de bloco {} é opcional dentro de um estrutura if mas na falta de {} ele associa apenas UMA sentença de código
//Obs: recomendável sempre usar {}

//----------------------------------------------------//--------------------------------------------------//

function teste2 (num) {
     if(num > 7); {        // cuidado com ';' (ponto e vírgula) nas estruturas de controle! Não use...
         console.log(num)
     }
}

teste2(6)
//6
teste1(8)
//8
