/*
7. Contar rango de números

Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.
*/

let num1 = parseInt(prompt("Ingrese el número dónde iniciar"));
let num2 = parseInt(prompt("Ingrese el número dónde finalizar"));

function contarRango(inicio, fin){
    let rango = 0;
    for(let i = inicio; i < fin; ++i){
        rango += 1;
    }
    console.log(rango - 1); 
}

contarRango(num1, num2);