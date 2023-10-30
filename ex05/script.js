var msg = window.document.getElementById('msg')
//var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = "Agora são " + hora + " horas"
if (hora >= 6 && hora < 12) {
    document.body.style.background = "#e2cd9f"
} else if (hora < 18 && hora >=12){
    document.body.style.background = "#b9846f"
} else if (hora < 6 || hora >= 18) {
    document.body.style.background = "#515154"
}