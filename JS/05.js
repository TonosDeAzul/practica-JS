/*
05. Número de Likes

Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

let numLikes = parseInt(prompt("¿Cuántos fueron los likes?"));

function likes(num){

    if(num < 1_000){
        console.log(`${num}`)
    }
    else if(num < 1_000_000){
        console.log(`${Math.floor(num / 1_000).toFixed(0)}K`)
    }
    else{
        console.log(`${Math.floor(num / 1_000_000).toFixed(0)}M`)
    }
}

likes(numLikes);