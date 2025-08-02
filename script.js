let num = document.getElementById('fnum') //pega o número
let lista = document.getElementById('flista') //pega o número e add na lista
let res = document.getElementById('res') // resultado
let valores = [] //array vazio para add um número

function adicionar(){ //função clicar na caixa
   if(isNum(num.value) && !inLista(num.value, valores)){
    window.alert('CERTO')
   } else{
    window.alert('ERRADO')
   }
}

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true

    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}