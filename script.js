let num = document.getElementById('fnum') //num: pega o campo de número.
let lista = document.getElementById('flista') //lista: pega o menu suspenso.
let res = document.getElementById('res') //res: pega o div de resultado.
let valores = [] //valores: inicia um array vazio que guardará os números válidos.

function adicionar(){  //Início da função que será chamada quando clicar em "Adicionar".
    if(isNumero(num.value) && !inLista(num.value, valores)){  //Verifica se o valor digitado é um número entre 1 e 100 e se ainda não está na lista.
        window.alert('ok')
    } else{
        window.alert('ERRO')
    }
}

function isNumero(n){  //Função para verificar se o valor está entre 1 e 100.
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false //Converte n para número e verifica se está no intervalo de 1 a 100. Retorna true ou false.
    }
}

function inLista(n,l){  //Verifica se o número n já está presente na lista l.
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
//Converte n para número e procura no array.
//Se indexOf retornar diferente de -1, é porque já está na lista.