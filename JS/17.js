/*
17. Capitalizar cada palabra

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:
*/

let frase = prompt("Ingrese una frase");

function capitalizar(frase){
    let fraseSeparada = frase.split(" ");
    for(let i = 0; i < fraseSeparada.length; i++){
        // console.log(fraseSeparada[i])
        fraseSeparada[i] = fraseSeparada[i].charAt(0).toUpperCase() + fraseSeparada[i].slice(1);
    }
    console.log(fraseSeparada.join(" "));
}

capitalizar(frase);