/*
15. Transcribir ADN a ARN


Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
Los complementos son los siguientes:
G -> C
C -> G
T -> A
A -> U
*/

let adn = prompt("Ingrese la cadena ADN");

function transcribir(cadena){
    let arn = ""
    for(let i = 0; i < cadena.length; i++){
        if(cadena[i].toLowerCase() === "g"){
            arn += "c";
        }
        if(cadena[i].toLowerCase() === "c"){
            arn += "g";
        }
        if(cadena[i].toLowerCase() === "t"){
            arn += "a";
        }
        if(cadena[i].toLowerCase() === "a"){
            arn += "u";
        }
    }
    console.log(arn.toUpperCase());
}

transcribir(adn);