function geladeira(){

    var hgeladeira = window.document.getElementById('hgeladeira').value
var qgeladeira = window.document.getElementById('qgeladeira').value

var res = window.document.getElementById('res')

var geladeira = hgeladeira * 53
var geladeira1 = geladeira * qgeladeira

res.innerHTML = `<p>Consumo diario de ${geladeira1}(kWh)`

}

function arcondicionado(){

    var harcondicionado = window.document.getElementById('hgeladeira').value
var qarcondicionado = window.document.getElementById('qgeladeira').value

var res = window.document.getElementById('res')

var arcondicionado = harcondicionado * 33
var arcondicionado1 = arcondicionado * qarcondicionado

res.innerHTML = `<p>Consumo diario de ${arcondicionado1}(kWh)`

}

function finalizar(){


}

