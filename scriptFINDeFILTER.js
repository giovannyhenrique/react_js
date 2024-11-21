// FIND -> Mesmo que tenha mais de um registro, o find retorna quando encontra o primeiro registro

let listagem = [5,3,"Jose",2,"Mateus"]

let busca = listagem.find((item)=>{
    //CONDICAO
    if(item == "Jose")
        return console.log("ITEM ENCONTRADO COM SUCESSO!")
})

console.log(busca)



// FILTER -> O filter retorna tudo que ele encontrou no array que esteja dentro das condições estipuladas

let palavras = ["Matheus", "Ana", "Jose", "Renato"];

let resultado = palavras.filter((item)=>{
    return item.length <= 4
})