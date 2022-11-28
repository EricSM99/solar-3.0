function chuveiro(){
    var hchuveiro = window.document.getElementById('hchuveiro').value
    var qchuveiro = window.document.getElementById('qchuveiro').value

    var chuveiro = hchuveiro * 3
    var chuveiro = chuveiro * qchuveiro

    alert("Adicionado com sucesso!");

    

}

function tv(){
    var htv = window.document.getElementById('htv').value
    var qtv = window.document.getElementById('qtv').value

    var tv = htv * 98
    var tv1 = tv * qtv

    alert("Adicionado com sucesso!");

}

function monitor(){

    var hmonitor = window.document.getElementById('hmonitor').value
    var qmonitor = window.document.getElementById('qmonitor').value

    

    var monitor = hmonitor * 10
    var monitor1 = monitor * qmonitor

    alert("Adicionado com sucesso!");

    

}

function geladeira(){

    var hgeladeira = window.document.getElementById('hgeladeira').value
    var qgeladeira = window.document.getElementById('qgeladeira').value

    

    var geladeira = hgeladeira * 53
    var geladeira1 = geladeira * qgeladeira

    alert("Adicionado com sucesso!");

}

function arcondicionado(){

    var harcondicionado = window.document.getElementById('hgeladeira').value
    var qarcondicionado = window.document.getElementById('qgeladeira').value

    

    var arcondicionado = harcondicionado * 33
    var arcondicionado1 = arcondicionado * qarcondicionado

    alert("Adicionado com sucesso!");

}

function resultado() {

    var hchuveiro = window.document.getElementById('hchuveiro').value
    var qchuveiro = window.document.getElementById('qchuveiro').value

    var chuveiro = hchuveiro * 98
    var chuveiro1 = chuveiro * qchuveiro

    var htv = window.document.getElementById('htv').value
    var qtv = window.document.getElementById('qtv').value

    var tv = htv * 98
    var tv1 = tv * qtv

    var hmonitor = window.document.getElementById('hmonitor').value
    var qmonitor = window.document.getElementById('qmonitor').value

    var monitor = hmonitor * 10
    var monitor1 = monitor * qmonitor


    var hgeladeira = window.document.getElementById('hgeladeira').value
    var qgeladeira = window.document.getElementById('qgeladeira').value

   
    var geladeira = hgeladeira * 53
    var geladeira1 = geladeira * qgeladeira

    
    var harcondicionado = window.document.getElementById('hgeladeira').value
    var qarcondicionado = window.document.getElementById('qgeladeira').value


    var arcondicionado = harcondicionado * 33
    var arcondicionado1 = arcondicionado * qarcondicionado

    var result = geladeira1 + arcondicionado1 + monitor1 + tv1 + chuveiro1;
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Consumo diario de ${result}(kWh)`
  }

