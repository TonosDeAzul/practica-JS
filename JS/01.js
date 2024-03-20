/*
01. Contraseña válida

Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

let contrasena = prompt("Ingrese la contraseña");

function contrasenaValida(contrasena) {
  let regex1 = /2Fj\(jjbFsuj/,
    regex2 = /eoZiugBf\&g9/;

  console.log(regex1.test(contrasena) || regex2.test(contrasena));
}

contrasenaValida(contrasena);
