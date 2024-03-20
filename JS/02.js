/*
02. Calcular impuestos

Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
*/

let edad = parseInt(prompt("Ingrese la edad"));
let ingresos = parseFloat(prompt("Ingrese los ingresos"));

function calcularImpuestos(edad, ingresos) {
  edad >= 18 && ingresos >= 1_000
    ? console.log(`Debe pagar impuesto\n${ingresos * 0.4}`)
    : console.log(`No debe pagar impuestos 0`);
}

calcularImpuestos(edad, ingresos);
