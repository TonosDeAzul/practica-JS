/*
08. Sumar rango de números

Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/

let num1 = parseInt(prompt("Ingrese el número dónde iniciar"));
let num2 = parseInt(prompt("Ingrese el número dónde finalizar"));

function contarRango(inicio, fin){
    let sumaRango = 0;
    for(let i = inicio; i <= fin; ++i){
        inicio === fin ? sumaRango = 0 : sumaRango += i;
    }
    console.log(sumaRango);
}

contarRango(num1, num2);