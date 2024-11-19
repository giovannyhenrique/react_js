function acao(){
    document.write("Executando... </br>")
}

// setInterval é usado para criar relogios e cronometros, pois executa varias vezes uma ação toda vez que o periodo do tempo é atingido
var timer = setInterval(() => {
    document.write("Executando!!! </br>");
},1000)

// Já o timeout executa apenas uma vez uma ação depois do periodo de tempo setado
setTimeout(() => {
    console.log("EXECUTOU O NOSSO TIMEOUT")
}, 3000);