/*
11. Sumar arreglo

Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.
*/

let numArray = [1, 2, 3, 4, 6, 7];

function sumarArreglo(nums){
    let suma = 0;
    for(let i = 0; i < nums.length; i++){
        suma += nums[i];
    }
    console.log(`El total es: ${suma}`);
}

sumarArreglo(numArray);