//var -> É uma variavel que tem um escopo global, por isso, pode ser acessada em qualquer trecho do codigo
var nome = "Sujeito"
if(nome == "Sujeito"){
    var cargo = "CEO - Sujeito Programador";
    console.log("Seu cargo é" + cargo)
}

//let -> É uma variavel que tem o escopo de bloco, por isso, so poder ser acessada, editada e atualizada no bloco de código em que ela foi criada (function, if...)
var nome = "Sujeito"
if(nome == "Sujeito"){
    let cargo = "CEO - Sujeito Programador";
    console.log("Seu cargo é" + cargo)
}

//const -> É uma variavel IMUTAVEL que tem o escopo de bloco, por isso, so poder ser acessada no bloco de código em que ela foi criada (function, if...), MAS NÃO PODE TER O SEU VALOR EDITADO!
var nome = "Sujeito"
if(nome == "Sujeito"){
    const cargo = "CEO - Sujeito Programador";
    console.log("Seu cargo é" + cargo)
}
