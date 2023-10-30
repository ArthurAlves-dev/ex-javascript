function contar() {
    var ini = document.getElementById("num1")
    var fim = document.getElementById("num2")
    var pas = document.getElementById("ipas")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert("[ERRO] Faltam dados")
    } else {
        res.innerHTML = "Contando... "
        let i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if ( p <= 0){
            window.alert("Passo inválido, Considerando PASSO 1")
            p = 1
        }
        if (i < f) { //Contagem crescente
            for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c } \u{1F449}`
            }
        } else { //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c } \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
