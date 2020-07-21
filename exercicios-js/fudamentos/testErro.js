
function caixaAlta(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { name: 'roberto'}
caixaAlta(obj)

/*
function tratado() {
    
    throw 10
    
}

function caixa() {
    try {
    console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratado(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' } 
caixa() */