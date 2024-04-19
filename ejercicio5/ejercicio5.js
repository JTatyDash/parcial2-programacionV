//Escribe un código que simula un juego donde el usuario debe adivinar un número
//secreto entre 1 y 100. El programa debe generar un número aleatorio y pedir al
//usuario que ingrese un número repetidamente hasta que adivine correctamente. El
//ciclo while se utiliza para controlar la repetición hasta que el usuario adivine el
//número.

//const numeroSecreto = Math.floor(Math.random() * 100) + 1;


const dataFromConsole = process.argv;

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

while (numeroSecreto < 101) {
    if (numeroSecreto == dataFromConsole){
        console.log("Adivina el numero: ")
        const number = +dataFromConsole[2];
    }else{
        console.log("sigue intentando, el numero era: ",numeroSecreto);
        const number = +dataFromConsole[2];
    }numeroSecreto++;
}