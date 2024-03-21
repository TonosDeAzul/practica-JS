/*
06. FizzBuzz

Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
*/

let num = parseInt(prompt("Ingrese un número"));

function fizzBuzz(num){
    let multiplo3 = num % 3 == 0;
    let multiplo5 = num % 5 == 0;
    if(multiplo3 && multiplo5){ console.log(`fizzbuzz`) }
    else if(multiplo3){ console.log(`fizz`) }
    else if(multiplo5){ console.log(`buzz`) }
    else{ console.log(`${num}`) }
}

fizzBuzz(num);