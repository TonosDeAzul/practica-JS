/*
04. Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
*/

let miArray = [1, "Hola", 2, "Mundo"];

function imprimirArreglo(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

imprimirArreglo(miArray);