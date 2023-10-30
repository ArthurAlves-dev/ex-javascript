function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Data inválida')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        
        var gênero = ''  
        if (fsex[0].checked) {
            gênero = "Homem"
        } else if (fsex[1].checked) {
            gênero = "Mulher"
        }      
        res.style.textAlign = "center"
        res.innerHTML = "Você é um(a) " + gênero + " de " + idade + " Anos"
    }
    
}