// REDUCE - BUSCA REDUZIR UM ARRAY

let numeros = [5,3,2];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} - total ate o momento`)
    console.log(`${numero} - valor atual`)
    console.log(`${indice} - indice atual`)
    console.log(`${original} - array original`)

    return acumulador += numero;

})

console.log("TOTAL DO REDUCE: " + total)