// Funcoes Anonimas

/**
 * () => {}
 * 
 * 1 -> '()' É na onde a função recebe os parametros;
 * 2 -> '=>' "Arrow"
 * 3 -> '{}' É o algoritmo que representa o corpo da função, ou seja, a atividade da função.
 */

function somar(a, b){
    let total = a + b;
    return console.log(total);
}
somar(10, 30);


let subtrair = (valor1, valor2) => {
    let total = valor1 + valor2;
    console.log(total);
}
subtrair(50, 25)

let numeros = [1,3,5,10];
numeros.map((item)=>{
    console.log(item);
})