/*
12. Multiplicar arreglo

Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

let numArray = [1, 2, 3, 4, 5, 6, 7];

function multiplicarArreglo(nums){
    let mult = 1;
    for(let i = 0; i < nums.length; i++){
        mult *= nums[i];
    }
    console.log(`El total es: ${mult}`);
}

multiplicarArreglo(numArray);