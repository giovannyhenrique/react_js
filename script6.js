// Desconstrução do objeto
// let pessoa = {
//     nome: "Giovanny",
//     sobrenome: "Santos",
//     empresa: "SENAI",
//     cargo: "Desenvolvedor"
// }
// console.log(pessoa.nome)
// let nome = "Teste"; //-> Mesmo ja tendo uma variavel com o mesmo nome no programa, podemos renomear essa variavel

// const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa; 

// console.log(nomePessoa);
// console.log(cargo);
// console.log(empresa);
// console.log(sobrenome);

//===============================================

let pessoas = ["Giovanny","Santos","SENAI","Desenvolvedor"]
let funcionarios = ["Giovanny","Santos","SENAI","Desenvolvedor"]

let {0:nome, 1:sobrenome, 2:empresa, 3:cargo} = pessoas
console.log(nome)
let [primeiroNome, segundoNome] = funcionarios
console.log(primeiroNome)
