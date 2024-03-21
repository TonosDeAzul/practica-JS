/*
9. Número de aes (letra "a")

Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/

let palabra = prompt("Ingrese una palabra");

function numeroDeAes(palabra){
    let regexa = /A/ig,
        contador = palabra.match(regexa);
    contador ? console.log(contador.length) : console.log(0);
}

numeroDeAes(palabra);