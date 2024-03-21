/*
10. Número de caracteres

Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.
*/

let palabra = prompt("Ingrese el string");
let letra = prompt("Ingrese la letra");

function numeroDeCaracteres(palabra, letra){
    let regexLetter = new RegExp(letra, "ig"),
        contador = palabra.match(regexLetter);
    contador ? console.log(contador.length) : console.log(0);
}

numeroDeCaracteres(palabra, letra);