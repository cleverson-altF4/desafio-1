let num = document.getElementById('fnum') //pega o número
let lista = document.getElementById('flista') //pega o número e add na lista
let res = document.getElementById('res') // resultado
let valores = [] //array vazio para add um número

function adicionar(){ //função clicar na caixa
   if(isNum(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O ${num.value} foi adicionado`
    lista.appendChild(item)
    res.innerHTML= ''
   } else{
     window.alert('Adicione um número informado')
   }
   num.value = ''
   num.focus()
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

function enter(){
    if(valores.length == 0){
        window.alert('Adicione um número')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao total temos ${total} números cadastrados aqui!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>A soma está entre o valor são ${soma}</p>`
        res.innerHTML += `<p>A média dos valores são de ${media}</p>`
    }
}