// Spread Operator -> ...

// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 6];
// console.log(numeros)

let pessoa = {
    nome:"Giovanny",
    sobrenome:"Santos"
}

let novaPessoa = {
    ...pessoa,
    endereco: "Rua Olegário",
    numero: 319
}