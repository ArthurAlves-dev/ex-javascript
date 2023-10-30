let n1 = document.getElementById("inum")
let lista = document.getElementById("ilista")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if(Number(n) >=1  && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(n1.value) && !inLista(n1.value, valores)) {
        valores.push(Number(n1.value))
        let item = document.createElement("option")
        item.text = "Valor " + n1.value + " adicionado"
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    n1.value = " "
    n1.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores à lista")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media           =  soma / tot
        res.innerHTML   =  " "
        res.innerHTML  +=  "<p>No total temos " + tot + " números cadastrados</p>"
        res.innerHTML  +=  "<p>O maior valor dentre os adicionados é " + maior
        res.innerHTML  +=  "<p>O menor valor dentre os adicionados é " + menor
        res.innerHTML  +=  "<p>A soma entre todos os valores é "       + soma
        res.innerHTML  +=  "<p>A média dos valores digitados é "       + media
    }
} 