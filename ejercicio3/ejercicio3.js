//Escribe un código que sume todos los números pares del 1 al 100 utilizando un ciclo
//while y luego imprima el resultado en la consola.

let number = 1;

let count = 0;

while (number <= 100){
    if (number % 2 == 0){
        console.log("Los numeros pares son: ", number)

        count = count + number;
        
    }

    number ++;
}
console.log(count);