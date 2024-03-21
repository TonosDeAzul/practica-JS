/*
13. Remover ceros

Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
*/

let numArray = [9, 3, 6, 4];

function removerCeros(nums){
    let newArray = nums.filter(num => num !== 0);
    console.log(newArray);
}

removerCeros(numArray);