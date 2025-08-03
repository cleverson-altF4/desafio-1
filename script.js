let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar(){
    if(numero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Informe o número informado')
    }
    num.value=''
    num.focus()
}
function numero(n){
    if(Number(n) >= 1  && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function isLista(n, listar){
    if(listar.indexOf(n) != -1){
        return true
    } else{
        return false
    }

}
function enter(){
    if(valores.length == 0){
        window.alert('Adicione um valor')
    } else{
        let total = valores.length
        let soma = 0
        let maior = [0]
        let menor = [0]
        let media = 0
        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `O total é ${total}`
        res.innerHTML +=`<p>A soma é ${soma}</p>`
        res.innerHTML += ` <p>O maior número é o ${maior}</p>`
        res.innerHTML += `<p>O menor número é o ${menor}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
        


    }

}