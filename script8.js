//REST Operator -> Usados em casos em que nçao sabemos extamenter a quantidade de parametroa serem recebidos

function convidados(...nomes){
    console.log("SEJABEM VINDO TODOS OS CONVIDADOS");
    console.log(nomes);
}

convidados("Matheus", "Lucas", "Maria", "Ana Carolina");