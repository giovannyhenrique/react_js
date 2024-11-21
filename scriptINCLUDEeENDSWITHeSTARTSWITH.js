// INCLUDES, startsWith, endsWith

// includes -> Efetuar uma verificação no array em busca da informação desejada e, caso encontre, retorna TRUE, caso não, FALSE. CASE SENSITIVE(Valida letras maiusculas e minusculas) 
// startsWith -> Efetuar uma verificação no array em busca da informação desejada tendo como parametro, o inicio da informação, "MATEUS" -> "MAT". CASE SENSITIVE. TRUE E FALSE
// endssWith -> Efetuar uma verificação no array em busca da informação desejada tendo como parametro, o fim da informação, "MATEUS" -> "US". CASE SENSITIVE. TRUE E FALSE

startsWith

let nomes = ["Matheus", "Ana", "Jose", "Renato"];
console.log(nomes.includes("Maria"));

console.log(nomes.startsWith("Ma"))

console.log(nomes.endsWith("ia"))