/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
*/

let numsArray = [1, 2, 3, 4, 5, 6, 7];
let num1 = parseInt(prompt("Ingrese el número dónde iniciar"));
let num2 = parseInt(prompt("Ingrese el número dónde finalizar"));

function sumarArreglo(array, inicio, fin){
    let sumaRango = 0;
    if(fin >= array.length){
        console.log(`No existen esas posiciones dentro del rango`);
    }
    else{
        for(let i = inicio; i <= fin; ++i){
            sumaRango += array[i];
        }
        console.log(sumaRango);
    }
}

sumarArreglo(numsArray, num1, num2);