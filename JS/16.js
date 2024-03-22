/*
16. Capitalizar palabra

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:
*/

let palabra = prompt("Ingrese una palabra");

function capitalizar(palabra){
    console.log(palabra.charAt(0).toUpperCase() + palabra.slice(1));
}

capitalizar(palabra);